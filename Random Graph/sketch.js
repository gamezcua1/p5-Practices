var dots = [];

function nextPoint(x,y){
	noFill();
	var found = false;
	var i = 0;
	while(!found){
		found = collidePointCircle(mouseX,mouseY,x,y,i++);
		console.log(found.x);
		console.log(found.y);
	}
}

function setup(){
	createCanvas(600,600);
	background(220);
	strokeWeight(5);
	for(var i = 0 ; i < 50 ; i++){
		let dot = {
			x:random(600),
			y:random(600)
		}
		dots.push(dot);
	}
	//console.log(dots);
	for(let i = 0 ; i < 49 ; i++){
		strokeWeight(5);
		point(dots[i].x,dots[i].y);
		strokeWeight(2);
		line(dots[i].x,dots[i].y,dots[i+1].x,dots[i+1].y);
	}
	
}

//var hit = false;
function draw() {
//	background(255);
//	ellipse(200,200,100,100);
//	point(mouseX,mouseY);
//
//	hit = collidePointCircle(mouseX,mouseY,200,200,100)
//
//	print("colliding? " + hit);
	
}