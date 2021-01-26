import suddenDeathPlayoff from './suddenDeathPlayoff';

export default function winProbSimulator(playersArray, courseArray, N=100) {
    const winners = {};
    playersArray.forEach(player=>winners[player["name"]]=0);
    for (let i=0; i<N; i++) {
        const playersCopy = JSON.parse(JSON.stringify(playersArray));
        const leaders = [];
        let bestScore = 50;
        playersCopy.forEach(player=>{
            playerRound(player, courseArray);
            if (player.score < bestScore) bestScore = player.score;
        });
        playersCopy.forEach(player=>{
            if (player.score===bestScore) leaders.push(player);
        })
        const winner=suddenDeathPlayoff(leaders, courseArray[17]);
        winners[winner] += 1;
    }
    Object.keys(winners).forEach(key=> winners[key] /= N);
    return winners;
}