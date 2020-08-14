const ftoc = function(deg) {
  return Math.round(10 * (deg - 32) * 5 / 9) / 10
}

const ctof = function(deg) {
  return Math.round(10 * (9 * deg / 5 + 32)) /10
}

module.exports = {
  ftoc,
  ctof
}
