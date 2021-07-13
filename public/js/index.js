let rainBool = false;
let fireBool = false;
let seaBool = false;
let birdBool = false;




function rain() {
    if (rainBool == false) {
        document.getElementById("rain").play();
        rainBool = true;

    }
    else if (rainBool == true) {
        document.getElementById("rain").pause();
        rainBool = false;

    }




}
function fire() {
    if (fireBool == false) {
        document.getElementById("fire").play();
        fireBool = true;

    }
    else if (fireBool == true) {
        document.getElementById("fire").pause();
        fireBool = false;

    }

}
function sea() {
    if (seaBool == false) {
        document.getElementById("sea").play();
        seaBool = true;

    }
    else if (seaBool == true) {
        document.getElementById("sea").pause();
        seaBool = false;

    }

}
function bird() {
    if (birdBool == false) {
        document.getElementById("bird").play();
        birdBool = true;

    }
    else if (birdBool == true) {
        document.getElementById("bird").pause();
        birdBool = false;

    }

}