function winProbSimulator(playersArray, courseObj, N=100) {
    const winners = {};
    playersArray.forEach(player=>winners[player.name]=0);
    for (let i=0; i<N; i++) {
        const playersCopy = JSON.parse(JSON.stringify(playersArray));
        const bestScore = {score: 1000, count: 1};
        playersCopy.forEach(player=>{
            playerRound(player, courseObj);
            if (player.score < bestScore.score) {
                bestScore.score = player.score;
                bestScore.count = 1;
            }
            else if (player.score === bestScore.score) bestScore.count += 1;
        });
        playersCopy.forEach(player=>{
            if (player.score===bestScore.score) winners[player.name] += 1 / bestScore.count;
        })
    }
    Object.keys(winners).forEach(key=> winners[key] /= N);
    return winners;
}