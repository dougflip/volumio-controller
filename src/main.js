const cp = require('child_process');
const socket = require('socket.io-client')('http://localhost:3000');
const Button = require('gpio-button');

const LIGHT_PIN = 2;
const turnLightOn = () => cp.execSync(`echo "1" > /sys/class/gpio/gpio2/value`);
const turnLightOff = () => cp.execSync(`echo "0" > /sys/class/gpio/gpio2/value`);

const button4 = new Button('button4');

// maintain the latest piece of state so we can toggle play/pause via button press
let currentVolumioState = {};

socket.on('connect', function() {
	console.log('=============');
	console.log('connected!');
	console.log('=============');

	button4.on('press', function() {
		const cmd = currentVolumioState.status && currentVolumioState.status === 'play'
			? 'pause'
			: 'play';
		socket.emit(cmd);
	});
});

socket.on('pushState', data => {
	const isPlaying = data.status === 'play';
	const newValue = isPlaying ? 1 : 0;

	console.log('=============');
	console.log('Setting the power light to', isPlaying);
	console.log('=============');

	cp.execSync(`echo ${newValue} > /sys/class/gpio/gpio2/value`);
	currentVolumioState = data;
});
