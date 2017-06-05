const cp = require('child_process');
const socket = require('socket.io-client')('http://localhost:3000');

const LIGHT_PIN = 2;

const turnLightOn = () => cp.execSync(`echo "1" > /sys/class/gpio/gpio2/value`);
const turnLightOff = () => cp.execSync(`echo "0" > /sys/class/gpio/gpio2/value`);

socket.on('connect', function() {
	console.log('=============');
	console.log('connected!');
	console.log('=============');
});

socket.on('pushState', data => {
	const isPlaying = data.status === 'play';
	const newValue = isPlaying ? 1 : 0;

	console.log('=============');
	console.log('Setting the power light to', isPlaying);
	console.log('=============');

	cp.execSync(`echo ${newValue} > /sys/class/gpio/gpio2/value`);
});
