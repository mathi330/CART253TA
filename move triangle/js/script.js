/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let circle1 = {
    x: 100,
    y: 250,
    size: 50,
    colour: "rgb(150, 255, 150)"
}
let circle2 = {
    x: 250,
    y: 250,
    size: 50,
    colour: "rgb(255, 150, 150)"
}
let circle3 = {
    x: 400,
    y: 250,
    size: 50,
    colour: "rgb(150, 150, 255)"
}

// the synth for the 3 notes
let synth1;
let synth2;
let synth3;

// set up function for canvas, userStartAudio because we are using PolySynth
function setup() {
  createCanvas(500, 500);
  userStartAudio();

  // create new synth for each circle
  synth1 = new p5.PolySynth();
  synth2 = new p5.PolySynth();
  synth3 = new p5.PolySynth();
}

// draw function, draw a black background with three circles
function draw() {
  background(0);
  fill(circle1.colour);
    ellipse(circle1.x, circle1.y, circle1.size);

    fill(circle2.colour);
    ellipse(circle2.x, circle2.y, circle2.size);

    fill(circle3.colour);
    ellipse(circle3.x, circle3.y, circle3.size);
}

// mouse pressed function, when user presses on the different circles, make a different note
function mousePressed() {
    // look at distance between mouse and center of circle1
    let circle1dist = dist(mouseX, mouseY, circle1.x, circle1.y);
    // if mouse is inside circle1
    if (circle1dist < circle1.size / 2) {
        synth1.play('G2', 0.5, 0, 1.5); // play: the note G2 at volume 0.1, right away (0) for 1.5 seconds
    }


    // look at distance between mouse and center of circle2
    let circle2dist = dist(mouseX, mouseY, circle2.x, circle2.y);
    // if mouse is inside circle2
    if (circle2dist < circle2.size / 2) {
        synth2.play(`C4`, .5, 0, 1);
    }

    // look at distance between mouse and center of circle3
    let circle3dist = dist(mouseX, mouseY, circle3.x, circle3.y);
    // if mouse is inside circle2
    if (circle3dist < circle3.size / 2) {
        synth3.play(`G3`, .5, 0, 1);
    }
}