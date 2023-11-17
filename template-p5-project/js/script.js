/**
 * Longing (But with Sound)
 * Tatiana Désormeaux
 * 
 * Adding elements of sound to Project 2 "Longing"
 */

"use strict";

let currentState;

let barkSFX;

let player;
let player2;

let creature;

let house;
let house2;
let house3;

// let state = `title`; // Can be: title, level1, note1, note2....

// preload() creates the images I wish to put in my program
function preload() {
    barkSFX = loadSound(`assets/sounds/bark.wav`);
}

// setup() creates the canvas and the new classes
function setup() {
    createCanvas(1350, 600);

    currentState = new Title();

    // Text settings
    textSize(32);
    textAlign(CENTER, CENTER);

    // Allows audio to start
    userStartAudio();

    // Create the player inside the main script
    // player = new Player({
    //     x: 60,
    //     y: 300,
    //     w: 30,
    //     h: 80,
    //     red: 243,
    //     green: 156,
    //     blue: 25,
    //     leftKey: LEFT_ARROW,
    //     rightKey: RIGHT_ARROW,
    //     upKey: UP_ARROW,
    //     downKey: DOWN_ARROW
    // });

    // player2 = new Player({
    //     x: 90,
    //     y: 380,
    //     w: 50,
    //     h: 25,
    //     red: 109,
    //     green: 82,
    //     blue: 34,
    //     leftKey: 65,
    //     rightKey: 68,
    //     upKey: 87,
    //     downKey: 83,
    // });

    // Create creature in the main script
    // creature = new Creature({
    //     x: 1000,
    //     y: 100,
    //     w: 30,
    //     h: 60
    // });

    // Create the house in the main script
    // house = new House({
    //     x: 700,
    //     y: 500,
    //     w: 50,
    //     h: 80,
    //     red: 113,
    //     green: 61,
    //     blue: 244,
    //     doorKnobSize: 8,
    // });

    // house2 = new House({
    //     x: 200,
    //     y: 150,
    //     w: 50,
    //     h: 80,
    //     red: 43,
    //     green: 165,
    //     blue: 79,
    //     doorKnobSize: 8,
    // });

    // house3 = new House({
    //     x: 1200,
    //     y: 300,
    //     w: 50,
    //     h: 80,
    //     red: 28,
    //     green: 123,
    //     blue: 138,
    //     doorKnobSize: 8,
    // });
}

// draw() displays all the different states and their functions
function draw() {

    currentState.draw();
}

function checkNote1() {
    // Note1 state
    push();
    background(236, 204, 74);
    textSize(32);
    fill(0);
    textAlign(LEFT, CENTER);
    text(`Dear Evelyn,\n\n I remember the first time you held me in your arms.\n I remember looking up at you as you held me, I remember the warmth, and feeling at peace.\n I felt happy, for the first time I knew I felt happy.\n I remember looking up as you stared down at me while holding me, you looked so beautiful.\n That was a really great day.\n Wasn't it?\n\n Sincerely,\n Her`, width / 80, height / 2);
    pop();

    push();
    textSize(32);
    fill(102, 107, 131);
    textAlign(CENTER, CENTER);
    text(`(Refresh Page to Restart)`, width / 2, 570);
    pop();
}

function mousePressed() {

    // Making everything mousePressed() in the House class be called
    // house.mousePressed();
    // house2.mousePressed();
    // house3.mousePressed();


    // // Making the player2 bark when pressed on
    // let i = dist(mouseX, mouseY, player2.x, player2.y);
    // if (i < player2.w / 2) {
    //     barkSFX.play();
    // }
}

function keyPressed() {
    currentState.keyPressed(keyCode);
}

function keyReleased() {
    currentState.keyReleased(keyCode);
}