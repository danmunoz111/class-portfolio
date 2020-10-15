/*
self portrait v1
by Daniel Munoz
*/
// global scope

var x = 480; // statement
var y = 100
var eyeSize =100
var mouthSize=eyeSize;

var faceRed = 145
var faceBlue= 133
var faceGreen= 89


function setup() {
	createCanvas(640,360);
}

function draw() {
	background('blue');

eyeSize = map (mouseX,0,height, 100/5, 100)
if(mouseIsPressed){
	eyeSize=0;
}
//face
fill(faceRed,faceGreen,faceBlue)
circle(x,y+10,200,);
//eyes
fill(254,56,123)
	circle(x-80,y,eyeSize);//left
	circle(x+40,y,eyeSize);//right
//mouth

	rect(x-40,y+50,mouthSize,mouthSize/2,mouthSize/10);

//hair
line(x-80,y-60,x-380,y+110)
line(x-60,y-60,x-370,y+120)
line(x-50,y-60,x-340,y+130)
line(x-30,y-60,x-330,y+140)
line(x-10,y-60,x-380,y+150)
line(x+20,y-60,x-370,y+160)
line(x+30,y-60,x+140,y+110)
line(x+30,y-60,x+140,y+110)
line(x+30,y-60,x+150,y+110)
line(x+50,y-60,x+160,y+110)



}