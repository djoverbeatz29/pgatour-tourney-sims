import Player from "./Player";

class Tournament {
    constructor(props) {
        this.holeProbs=props.holeProbs;
        this.players=props.players;
        this.suddenDeathIx=props.suddenDeathIx || [17, 9];
    }

    playThroughHole(n=72) {
        for (const player of this.players) {
            player.finishNHoles(n);
        }
    }

    getLeaders() {
        const leaderObj = {
            score=100,
            players: []
        };
        for (let i=0; i<this.players.length; i++) {
            const playerScore=this.players[i].score;
            if (playerScore<leaderObj.score) {
                leaderObj.players=[i];
                leaderObj.score=playerScore;
            }
            else if (playerScore===leaderObj.score) {
                leaderObj.players.push(i);
            }
        }
        return leaderObj.players;
    }

    playSuddenDeath() {
        let leaders = this.getLeaders()
        let currHole = 0;
        while (leaders.length>1) {
            let bestScore = 50;
            const currHoleIx = this.suddenDeathIx[currHole];
            const currHoleProb = this.holeProbs[currHoleIx];
            for (const leaderIx of leaders) {
                this.players[leaderIx].playHole(currHoleProb, false);
                bestScore = Math.min(this.players[leaderIx].suddenDeathScore, bestScore);
            }
            leaders = leaders.filter(leaderIx=> this.leaders[leaderIx].suddenDeathIx === bestScore);
            this.players.forEach(player => player.suddenDeathScore=0)
            currHole++;
        }
        const winnerIx = leaders[0];
        return this.players[winnerIx].name;
    }

    getWinner() {
        const leaders=getLeaders();
        if (leaders.length===1) return this.players[leaders[0]].name;
        else return this.playSuddenDeath();
    }
}