/*
	meme v 1
	by Daniel Munoz
	text+images
	*/

var title = 'You have been visited by cozy Axolotl';
var description = 'Good Vibes Will Come Your Way.';

var axolotlImage;

function preload(){
	axolotlImage=loadImage('axolotl.jpeg');
}
function setup(){
	var canvas= createCanvas(640,360);
	canvas.drawingContext.miterLimit= 2;
}

function draw(){
	background(220);

	image(axolotlImage,0,0,width,height)

	
	textSize(25);
	fill('red');
	stroke(255);
	strokeWeight(10);
	textFont('monospace');

	textAlign(CENTER,BOTTOM);

	var len = title.length;
	var n = map(frameCount,0,100,0,len );

	text( title.substring(0,n), width/2, height/2);

	var titleWidth = textWidth('MMP 210');

	textSize(12)
	noStroke();
	textAlign(BOTTOM)
	text(description,width/2 - titleWidth/2 ,height/ 2 + 40, titleWidth);

}
