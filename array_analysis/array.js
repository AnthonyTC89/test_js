const analysis = {
  average:  (arr) => arr.reduce((a,b) => a + b, 0) / arr.length,
  min:      (arr) => Math.min(...arr)
}

module.exports = analysis;