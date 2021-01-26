export default function playerRound(playerObj, courseObj) {
    Object.values(courseObj).forEach(holeDist=>{
      holeDistCopy = JSON.parse(JSON.stringify(holeDist));
      holeDistCopy[1] += playerObj.SGT / (18 * 2);
      holeDistCopy[2] += playerObj.SGT / (18 * 2);
      playerObj.score += randomHoleScore(holeDistCopy);
    })
  }