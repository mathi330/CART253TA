/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let numCircles = 100;

let circle = {
    x: [],
    y: [],
    size: [],
    alpha: []
};



function setup() {
    createCanvas(windowWidth, 200);
    background(0);
    rectMode(CENTER); // to make the text box in the center
}

function draw() {
    background(0);
    myBackground();
    
    let s = 'The quick brown fox jumped over the lazy dog.';
    fill(200);
    textSize(32);
    textAlign(CENTER);
    text(s, width/2, height/2, width/3, 80); // Text wraps within text box
}



function myBackground(){
    for(let i = 0; i < numCircles; i++){
        PlaceCircles();
        displayCircles(circle.x[i], circle.y[i], circle.size[i], circle.alpha[i]);
    }
}

function PlaceCircles(){
    let x = random(0, width);
    let y = random(0, height);
    let size = random(5, 50);
    let alpha = random(30, 100);

    circle.x.push(x);
    circle.y.push(y);
    circle.size.push(size);
    circle.alpha.push(alpha);
}

function displayCircles(x, y, size, alpha) {
    noFill();
    strokeWeight(2);
    stroke(255, alpha);
    ellipse(x, y, size);
}