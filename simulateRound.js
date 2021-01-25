function simulateRound(playersArray, courseObj) {
    playersArray.forEach(player=>playerRound(player, courseObj));
    const bestScore = Math.max(...playersArray.map(player=>player.score));
    const winners = players.filter(player=>player.score=bestScore);
    return winners;
  }