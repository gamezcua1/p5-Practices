var dots = [];
function setup() {
  createCanvas(800,600);
  background(51);
  strokeWeight(3);
	stroke(255);
}

function mouseClicked(){
	dots.push([mouseX,mouseY]);

//	ellipse(mouseX,mouseY, 10);
}

function getNearest(x, y){
	var near = 1000;
	var NX = x;
	var NY = y;
	dots.forEach(dot => {
		var dis = dist(x,y,dot[0],dot[1]);
		if((dis <= near)&&(dot[0] != x && dot[1] != y)){
			near = dis;
			NX = dot[0];
			NY = dot[1];
		}
	});
	line(x,y,NX,NY);
}

function draw() {
	background(51);

	dots.forEach(dot => {
		ellipse(dot[0],dot[1],10);
		getNearest(dot[0],dot[1]);
	});

}