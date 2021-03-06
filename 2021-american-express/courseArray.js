const holeProbsObj = {
    1: {
      "-2": 0,
      "-1": 0.21,
      "0": 0.67,
      "1": 0.12,
      "2": 0
    },
    2: {
      "-2": 0,
      "-1": 0.23,
      "0": 0.70,
      "1": 0.07,
      "2": 0
    },
    3: {
      "-2": 0,
      "-1": 0.21,
      "0": 0.67,
      "1": 0.12,
      "2": 0
    },
    4: {
      "-2": 0,
      "-1": 0.149,
      "0": 0.759,
      "1": 0.089,
      "2": 0.003
    },
    5: {
      "-2": 0.01,
      "-1": 0.375,
      "0": 0.425,
      "1": 0.145,
      "2": 0.045
    },
    6: {
      "-2": 0,
      "-1": 0.05,
      "0": 0.70,
      "1": 0.20,
      "2": 0.05
    },
    7: {
      "-2": 0,
      "-1": 0.24,
      "0": 0.64,
      "1": 0.07,
      "2": 0.05
    },
    8: {
      "-2": 0.0075,
      "-1": 0.4575,
      "0": 0.4875,
      "1": 0.0475,
      "2": 0
    },
    9: {
      "-2": 0,
      "-1": 0.20,
      "0": 0.62,
      "1": 0.14,
      "2": 0.04
    },
    10: {
      "-2": 0,
      "-1": 0.21,
      "0": 0.69,
      "1": 0.08,
      "2": 0.02
    },
    11: {
      "-2": 0.01,
      "-1": 0.3275,
      "0": 0.5775,
      "1": 0.0675,
      "2": 0.0175
    },
    12: {
      "-2": 0,
      "-1": 0.2875,
      "0": 0.6075,
      "1": 0.0975,
      "2": 0.0075
    },
    13: {
      "-2": 0,
      "-1": 0.10,
      "0": 0.71,
      "1": 0.15,
      "2": 0.04
    },
    14: {
      "-2": 0,
      "-1": 0.2575,
      "0": 0.6675,
      "1": 0.0575,
      "2": 0.0175
    },
    15: {
      "-2": 0,
      "-1": 0.0925,
      "0": 0.8025,
      "1": 0.1025,
      "2": 0.0025
    },
    16: {
      "-2": 0.01,
      "-1": 0.395,
      "0": 0.525,
      "1": 0.065,
      "2": 0.005
    },
    17: {
      "-2": 0.00,
      "-1": 0.1125,
      "0": 0.7025,
      "1": 0.0825,
      "2": 0.1025
    },
    18: {
      "-2": 0,
      "-1": 0.1425,
      "0": 0.6825,
      "1": 0.1325,
      "2": 0.0425
    }
  };

const holeProbs = Object.values(holeProbsObj).map(hole=>{
  const sortedKeys = Object.keys(hole).sort((a,b)=>parseInt(a)>parseInt(b)?1:-1);
  let sum=0;
  const sums=[];
  for (const key of sortedKeys) {
      sum+=hole[key];
      sums.push(sum);
  }
  return sums;
});

const courseArray = [
  [0, 0.21, 0.88, 1, 1],
  [0, 0.23, 0.93, 1, 1],
  [0, 0.21, 0.88, 1, 1],
  [0, 0.149, 0.908, 0.997, 1],
  [0.01, 0.385, 0.81, 0.955, 1],
  [0, 0.05, 0.75, 0.95, 1],
  [0, 0.24, 0.88, 0.95, 1],
  [0.0075, 0.465, 0.9525, 1, 1],
  [0, 0.2, 0.82, 0.96, 1],
  [0, 0.21, 0.90, 0.98, 1],
  [0.01, 0.3375, 0.915, 0.9825, 1],
  [0, 0.2875, 0.895, 0.9925, 1],
  [0, 0.1, 0.81, 0.96, 1],
  [0, 0.2575, 0.925, 0.9825, 1],
  [0, 0.0925, 0.895, 0.9975, 1],
  [0.01, 0.405, 0.93, 0.995, 1],
  [0, 0.1125, 0.815, 0.8975, 1],
  [0, 0.1425, 0.825, 0.9575, 1]
];

export default courseArray;