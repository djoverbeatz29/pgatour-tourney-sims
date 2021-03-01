function getRandomScore(probArray) {
    const rando = Math.random();
    for (let i=0; i<probArray.length; i++) {
        if (probArray[i]>rando) return i-1;
    }
}