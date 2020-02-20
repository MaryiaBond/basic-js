module.exports = function createDreamTeam(members) {
  return (members instanceof Array) ? members.reduce((command, m) => (typeof m === "string") ? command = command + m.trim().slice(0,1).toUpperCase() : command, '').split('').sort().join('') : false
};