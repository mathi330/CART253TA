"use strict";

let circles = [];

function setup() {
  createCanvas(600, 600);
  userStartAudio();

for(let i = 0; i< 3; i++){
    let x = width/4 * i;
    let y = height/2;
    let r = 255/3 * i;
    let g = 150/3 * i;
    let b = 255 / 7 * i;

    let circle = new Circle(x, y, r, g, b);
    circles.push(circle);
}

}

function draw() {
  background(0);

  for(let i = 0; i < circles.length; i++){
    circles[i].display();
  }
}

function mousePressed(){
    for(let i = 0; i < circles.length; i++){
        circles[i].mousePressed();
    }
}