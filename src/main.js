const socket = require('socket.io-client')('http://localhost:3000');
const Button = require('gpio-button');

const { initialize: initializeStatusLed, turnLightOn, turnLightOff } = require('./status-led-light');

const button4 = new Button('button4');

// maintain the latest piece of state so we can toggle play/pause via button press
let currentVolumioState = {};

initializeStatusLed()
    .catch(err => {
        console.error('Error trying to configure and turn off LED', err);
        return Promise.reject(err);
    });

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
        isPlaying ? turnLightOn() : turnLightOff();
        currentVolumioState = data;
});
