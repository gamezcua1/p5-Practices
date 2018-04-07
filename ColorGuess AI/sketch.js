let rgb = [255, 255, 255];
const blackChosen = [250, 150];
const whiteChosen = [650, 150];
let choice = "WHITE";
let chooser;

function setup() {
	createCanvas(900, 600);
	background(51);
	chooser = new ColoryChooser();
	fill(255);
	textFont('Helvetica');
	textSize(40);
	text("Choose which text looks more recognizable", 70, 70)

	for (let i = 0; i < 3; i++)
		rgb[i] = random(0, 255);
	
	choice = chooser.guess(rgb);
}

function drawCircles(){
	fill(color(rgb[0], rgb[1], rgb[2]))
	ellipse(200, 250, 200);
	ellipse(700, 250, 200);

	textSize(30);
	fill(color(0, 0, 0));
	text("Hello!", 157, 260);
	fill(color(255, 255, 255));
	text("Hello!", 657, 260);
}

function networkHasSpoken() {
	fill(color(rgb[0] + 30, rgb[1] + 30, rgb[2] + 30));
	if (choice == "WHITE")
		ellipse(whiteChosen[0], whiteChosen[1], 50);
	else
		ellipse(blackChosen[0], blackChosen[1], 50);
}

function mouseClicked(){
	let d = dist(200, 250,mouseX,mouseY);
	
	
	if(d <= 100){
		chooser.training("WHITE")
		
		rgb = [random(0, 255), random(0, 255), random(0, 255)];
		choice = chooser.guess(rgb)
	}
	else{
		d = dist(700, 250, mouseX, mouseY);
		if(d <= 100){
			chooser.training("BLACK")
			
			rgb = [random(0, 255), random(0, 255), random(0, 255)];
			choice = chooser.guess(rgb)
		}
	}

}


function draw() {
	background(51);
	textFont('Helvetica');
	textSize(40);
	text("Choose which text looks more recognizable", 70, 70)

	point(200, 250);
	drawCircles();
	networkHasSpoken();

}