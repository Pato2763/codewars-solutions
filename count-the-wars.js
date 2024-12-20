// get the binary representation of the number and return the number of ones without using dtring methods

function hammingWeight(x) {
  let ones = 0;
  const geoSequence = [1];
  while (x / geoSequence[geoSequence.length - 1] >= 1) {
    if (x <= 1) {
      return x;
    } else {
      const result = geoSequence[geoSequence.length - 1] * 2;
      geoSequence.push(result);
    }
    console.log(geoSequence);
  }

  for (let i = geoSequence.length - 1; i >= 0; i--) {
    if (x / geoSequence[i] >= 1) {
      x -= geoSequence[i];
      ones++;
    }
  }
  return ones;
}

console.log(hammingWeight(19));
