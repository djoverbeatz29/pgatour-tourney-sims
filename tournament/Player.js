export default class Player {
    constructor(props) {
        this.name=props.name || "";
        this.score=props.score || 0;
        this.probs=props.holeProbs;
        this.holesPlayed=props.holesPlayed || 0;
        this.skill=props.skill || 0;
        this.suddenDeathScore=0;
        this.adjustProbs();
    }

    adjustProbs() {
        for (let i=0; i<this.probs.length; i++) {
            this.probs[i][1]+=this.skill / 18;
            this.probs[i][2]+=this.skill / 18;
        }
    }

    playHole(probArray, isRegulation=true) {
        const rando = Math.random();
        let holeScore;
        for (let i=0; i<probArray.length; i++) {
            if (probArray[i]>rando) {
                holeScore = i-2;
                break;
            }
        }
        if (isRegulation) this.score += holeScore;
        else this.suddenDeathScore += holeScore;
    }

    finishNHoles(n=72) {
        while (this.holesPlayed<n) {
            const currHole = (this.holesPlayed + 1) % 18;
            const currHoleProbArray = this.probs[currHole];
            this.playHole(currHoleProbArray);
            this.holesPlayed++;
        }
    }
}