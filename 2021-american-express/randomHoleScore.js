export default function randomHoleScore(holeDist) {
    const randNum = Math.random();
    return [...Array(holeDist.length).keys()].find(ix=>holeDist[ix]>randNum)-2;
  }