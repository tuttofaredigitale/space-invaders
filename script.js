document.getElementById("score").innerHTML = 0;
// Player
var player = {
    left: 740,
    top: 500
};
// Missiles
var missiles = [];
// Enemies
var enemies = [
    { left: 120, top: 100 },
    { left: 180, top: 100 },
    { left: 240, top: 100 },
    { left: 300, top: 100 },
    { left: 360, top: 100 },
    { left: 420, top: 100 },
    { left: 480, top: 100 },
    { left: 540, top: 100 },
    { left: 600, top: 100 },
    { left: 660, top: 100 },
    { left: 740, top: 100 },
    { left: 800, top: 100 },
    { left: 860, top: 100 },
    { left: 920, top: 100 },
    { left: 980, top: 100 },
    { left: 1040, top: 100 },
    { left: 1100, top: 100 },
    { left: 1160, top: 100 },
    { left: 1220, top: 100 },
    { left: 1280, top: 100 },
    { left: 1340, top: 100 },
    { left: 120, top: 140 },
    { left: 180, top: 140 },
    { left: 240, top: 140 },
    { left: 300, top: 140 },
    { left: 360, top: 140 },
    { left: 420, top: 140 },
    { left: 480, top: 140 },
    { left: 540, top: 140 },
    { left: 600, top: 140 },
    { left: 660, top: 140 },
    { left: 740, top: 140 },
    { left: 800, top: 140 },
    { left: 860, top: 140 },
    { left: 920, top: 140 },
    { left: 980, top: 140 },
    { left: 1040, top: 140 },
    { left: 1100, top: 140 },
    { left: 1160, top: 140 },
    { left: 1220, top: 140 },
    { left: 1280, top: 140 },
    { left: 1340, top: 140 },
    { left: 120, top: 180 },
    { left: 180, top: 180 },
    { left: 240, top: 180 },
    { left: 300, top: 180 },
    { left: 360, top: 180 },
    { left: 420, top: 180 },
    { left: 480, top: 180 },
    { left: 540, top: 180 },
    { left: 600, top: 180 },
    { left: 660, top: 180 },
    { left: 740, top: 180 },
    { left: 800, top: 180 },
    { left: 860, top: 180 },
    { left: 920, top: 180 },
    { left: 980, top: 180 },
    { left: 1040, top: 180 },
    { left: 1100, top: 180 },
    { left: 1160, top: 180 },
    { left: 1220, top: 180 },
    { left: 1280, top: 180 },
    { left: 1340, top: 180 },
    { left: 120, top: 220 },
    { left: 180, top: 220 },
    { left: 240, top: 220 },
    { left: 300, top: 220 },
    { left: 360, top: 220 },
    { left: 420, top: 220 },
    { left: 480, top: 220 },
    { left: 540, top: 220 },
    { left: 600, top: 220 },
    { left: 660, top: 220 },
    { left: 740, top: 220 },
    { left: 800, top: 220 },
    { left: 860, top: 220 },
    { left: 920, top: 220 },
    { left: 980, top: 220 },
    { left: 1040, top: 220 },
    { left: 1100, top: 220 },
    { left: 1160, top: 220 },
    { left: 1220, top: 220 },
    { left: 1280, top: 220 },
    { left: 1340, top: 220 },
];

// Keypress events to check which key is pressed
document.onkeydown = function(e) {
    if (e.keyCode === 37) {
        player.left = player.left - 10;
    }
    if (e.keyCode === 39) {
        player.left = player.left + 10;
    }
    if (e.keyCode === 32) {
        missiles.push({
            left: player.left + 20,
            top: player.top 
        });
        addMissiles();
    }
    displayPlayer();
}


function displayPlayer() {
    document.getElementById('player').style.left = player.left + 'px';
    document.getElementById('player').style.top = player.top + 'px';
}

function addMissiles() {
    document.getElementById('missiles').innerHTML = "";
    for(var i = 0 ; i < missiles.length ; i++ ) {
        document.getElementById('missiles').innerHTML += "<div class='missile' style='left:"+missiles[i].left+"px; top:"+missiles[i].top+"px'></div>";
    }
}

function moveMissiles() {
    for(var i = 0 ; i < missiles.length ; i++ ) {
        missiles[i].top = missiles[i].top - 5;
    }
}

function displayEnemies() {
    document.getElementById('enemies').innerHTML = "";
    for(var i = 0 ; i < enemies.length ; i++ ) {
        document.getElementById('enemies').innerHTML += "<div class='enemy' style='left:"+enemies[i].left+"px; top:"+enemies[i].top+"px'></div>";
    }
}

function moveEnemies() {
    for(var i = 0 ; i < enemies.length ; i++ ) {
            enemies[i].top = enemies[i].top + 5;					
    }
}

function killEnemies() {
    for (var enemy = 0; enemy < enemies.length; enemy++) {
        for (var missile = 0; missile < missiles.length; missile++) {
            if ( 
                missiles[missile].left >= enemies[enemy].left  &&
                missiles[missile].left <= (enemies[enemy].left + 50)  &&
                missiles[missile].top <= (enemies[enemy].top + 50)  &&
                missiles[missile].top >= enemies[enemy].top
            ) {
                enemies.splice(enemy, 1);
                missiles.splice(missile, 1);
                var score = parseInt(document.getElementById("score").innerHTML);
                score = score + 1;
                document.getElementById("score").innerHTML = score;
            }
        }
    }
}

function playGame() {
    setTimeout(playGame, 100);
    moveMissiles();
    addMissiles();
    displayEnemies();
    killEnemies();
}
setInterval(moveMissiles, 100);
setInterval(moveEnemies, 2000);
playGame();