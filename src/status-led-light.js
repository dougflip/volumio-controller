const cp = require('child_process');

const LIGHT_PIN = 2;
const configureLedPin = () => cp.execSync(`gpio -g mode ${LIGHT_PIN} out`);
const turnLightOn = () => cp.execSync(`gpio -g write ${LIGHT_PIN} 1`);
const turnLightOff = () => cp.execSync(`gpio -g write ${LIGHT_PIN} 0`);

function initialize() {
    return Promise.resolve()
        .then(configureLedPin)
        .then(turnLightOff);
}

module.exports = {
    initialize,
    turnLightOn,
    turnLightOff,
};
