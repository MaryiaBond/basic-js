const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let x
  if ((typeof sampleActivity) === "string")
    x = Math.ceil(-(HALF_LIFE_PERIOD/0.693) * Math.log(parseFloat(sampleActivity)/MODERN_ACTIVITY))
  return (x > 0 && x < 60000) ? x : false
  // -(T1/2/0.693) * ln(A/Ao)
  // -(5730/0.693) * Math.log(sampleActivity/15)
};
