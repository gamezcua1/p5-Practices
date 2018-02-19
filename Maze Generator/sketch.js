function makeCircule(x,y,r){
	noFill();
	ellipse(x,y,r);
	if(x<800){
		//makeCircule(x+10,y,r*.66);
		makeCircule(x+5,y+5,r*.66);
	}
}

function maze(px,py){
	strokeWeight(5);
	stroke(255);
	line(px.x,px.y,py.x,py.y);
}

function setup() {
  createCanvas(800,600);
  background(51);
  strokeWeight(5);
	stroke(255);
  // let point = {
  // 	x:0,
  // 	y:0
  // };
  // let point2 = {
  // 	x:20,
  // 	y:20
  // };
  // maze(point,point2);
}

var xx = 00;
var yy = 00;
var cont = 0;
function draw() {
	let point = {
  		x:xx,
  		y:yy
  	};
  	let point2 = {
  		x:xx+20,
  		y:yy+20
  	};
  	xx+=20;
  	if(cont > 800/20 ){
  		xx = 0;
  		yy +=20;
  		cont=0;
  	}
  	cont++;
  	var x = random(1);
  	if(x < 0.5){
		line(xx,yy,xx+20,yy+20);
  	}
  	else{
		line(xx+20,yy,xx,yy+20);
  	}
  	console.log(point);
}