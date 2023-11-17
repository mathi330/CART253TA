class Circle{
    constructor(x, y, r, g, b){
        this.x = x;
        this.y= y;
        this.size = 50;
        this.colour = `rgb(${r}, ${g}, ${b})`
        this.synth = new p5.PolySynth();
        // The scale for F minor ("b" means "flat" if you haven't seen it before)
        this.notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F5`];
        // To track the interval that plays note
        this.interval;
    }

    display(){
        fill(this.colour);
        ellipse(this.x, this.y, this.size);
    }
    
    mousePressed(){
        if (this.interval === undefined) {
            // Start our interval, calling playRandomNote every 500 milliseconds
            // Assign the result to interval to remember the interval
            this.interval = setInterval(this.playRandomNote(), 500);
        }
        else {
            // If they click when it's playing, clear the interval and set interval
            // back to undefined to stop play
            clearInterval(this.interval);
            this.interval = undefined;
        }
        let note = random(this.notes);
        console.log(note);
    }
        
    // playRandomNote() plays a random note
    playRandomNote() {
        // Chose a random note
        let note = random(this.notes);
        console.log("in play random note: " + note)
        // Play it
        this.synth.play(note, 1, 0, 1);
    }
    

}