export default function suddenDeathPlayoff(playersArray, holeArray) {
    let playersCopy=JSON.parse(JSON.stringify(playersArray));
    while (playersCopy.length>1) {
        let lead=50;
        playersCopy.forEach(player=>{
            player.score=0;
            playerRound(player, [holeArray]);
            if (player.score<lead) lead=player.score;
        });
        playersCopy=playersCopy.filter(player=>player.score===lead);
    }
    return playersCopy[0];
}