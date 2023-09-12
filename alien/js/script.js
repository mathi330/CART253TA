/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";




/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);
    background(90, 80, 150);

    // rectMode(CENTER);
}


/**
 * Description of draw()
*/
function draw() {
    noStroke();
    fill(250,200,100);
    ellipse(250, 250,  400, 80);
    ellipse(250, 200,  350, 70);
    ellipse(250, 160,  300, 60);
    ellipse(250, 120,  250, 50);

    stroke(250,200,100);
    line(200, 120, 100, 50);
    line(300, 120, 400, 50);

    strokeWeight(3);
    fill(100,250,100);
    ellipse(100, 50, 20);
    ellipse(400, 50, 20);

    fill(0);
    strokeWeight(1);
    stroke(0);
    ellipse(200, 220, 20, 80);
    ellipse(300, 220, 20, 80);

    strokeWeight(2);
    line(230, 260, 250, 270);
    line(250, 270, 270, 260);


    noStroke();
    fill(250,200,100);
    rect(220, 280, 60, 220);


    ellipse(250, 500, 300, 200);

}