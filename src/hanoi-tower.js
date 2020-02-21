module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1
    return new Object({turns: turns, seconds: turns/(turnsSpeed/3600)})
}