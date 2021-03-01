function getWinner(players) {
    const winnerObj = Object.keys(players).reduce((cum, curr)=>{
        if (players[curr].score<cum.score) {
            cum.score=players[curr].score;
            cum.players=[curr];
        }
        else if (players[curr].score===cum.score) {
            cum.players.push(curr);
        }
        return cum;
    }, {'players': [], score: 100});
    const winnerArr = winnerObj.players;
    if (winnerArr.length===1) return winnerArr[0];
    else {
        const playoffProbArray = winnerArr.map(winner=>players[winner].playoffProb);
        const probSum = playoffProbArray.reduce((cum, curr)=>cum+curr, 0);
        for (let i=1;i<playoffProbArray.length;i++) {
            playoffProbArray[i]+=playoffProbArray[i-1];
        }
        const rando = Math.random() * probSum;
        let randoIx;
        for (let i=0; i<playoffProbArray.length; i++) {
            if (playoffProbArray[i]>rando) {
                randoIx=i;
                break;
            }
        }
        return winnerArr[randoIx];
    }
}