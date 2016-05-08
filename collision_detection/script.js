var puck_x = 50;
var puck_y = 50;
var speed = 25;

document.getElementById ('puck').style.top = puck_y + 'px';
document.getElementById ('puck').style.left = puck_x + 'px';

function logCoordinates() {
    console.log('x:'+ puck_x +' y:' + puck_y);
}

function checkCollision() {
    if (puck_x >= 250 && puck_x <= 350 && puck_y >= 150 && puck_y <= 250) {
        console.log('collision detected');
        document.getElementById('gap').style.backgroundColor = 'red';
    } else {
        document.getElementById('gap').style.backgroundColor = 'white';
    }
}

function checkBoundaries() {
    if (puck_x >= 550 ) {
        puck_x = 550;
    } else if (puck_x <= 25 ) {
        puck_x = 25;
    } else if (puck_y >= 350 ) {
        puck_y = 350;
    } else if (puck_y <= 25 ) {
        puck_y = 25;
    }
}

function checkSize() {
    if (puck_x == 450 && puck_y == 50) {
        console.log('big');
        document.getElementById('puck').style.width = 40 +'px';
        document.getElementById('puck').style.height = 40 +'px';
    } else if (puck_x == 100 && puck_y == 300) {
        console.log('small');
        document.getElementById('puck').style.width = 10 +'px';
        document.getElementById('puck').style.height = 10 +'px';
    }
}

document.getElementById ('right').addEventListener('click', function () {
    puck_x += speed;
    document.getElementById ('puck').style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    checkBoundaries();
    checkSize();
});


document.getElementById ('left').addEventListener('click', function () {
    puck_x -= speed;
    document.getElementById ('puck').style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    checkBoundaries();
    checkSize();
});

document.getElementById ('up').addEventListener('click', function () {
    puck_y -= speed;
    document.getElementById ('puck').style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    checkBoundaries();
    checkSize();
});

document.getElementById ('down').addEventListener('click', function () {
    puck_y += speed;
    document.getElementById ('puck').style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    checkBoundaries();
    checkSize();
});

/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it /
- the puck can't go beyond the arena borders /
- create an item that makes the puck bigger 
- create an item that makes the puck smaller

*/
