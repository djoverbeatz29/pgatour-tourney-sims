function simOpen(n=100) {
    const winnerCount = {
        "Jack Nicklaus": 0,
        "Lee Trevino": 0,
        "Tony Jacklin": 0
    }
    for (let i=0; i<n; i++) {
        leeProbs.forEach(prob=>players["Lee Trevino"].score += getRandomScore(prob));
        tonyProbs.forEach(prob=>players["Tony Jacklin"].score += getRandomScore(prob));
        const winner=getWinner(players);
        winnerCount[winner]++;
        players["Jack Nicklaus"].score=-5;
        players["Tony Jacklin"].score=-6;
        players["Lee Trevino"].score=-6;
    }
    Object.keys(winnerCount).forEach(winner=>winnerCount[winner] /= n);
    return winnerCount;
}