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
    rectMode(CENTER);
}


/**
 * Description of draw()
*/

let speedX = 1;
let speedY = 1;


function draw() {
    background(0);
    triangle(0, 55, 28, 0, 56, 55);
    
    push();
    translate(width/2, height/2);
    rotate(PI/5);
    rect(0, 0, 100, 100);
    pop();
    
    rect(100, 200, 50, 50);
    
}