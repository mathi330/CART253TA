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

let distanceGroup = [];

/**
 * Description of setup
*/
function setup() {
    
    for(let i = 0; i < fishGroup.length; i++){
        distanceGroup[i] = distanceCalculate(fishGroup[i]);
        
        
    }
}

function distanceCalculate(fish){
    let d =dist(user.x, user.y, fish.x, fish.y);
    return d
}


/**
 * Description of draw()
*/
function draw() {

}