var table = [];
const dirs = [
	[0,1],
	[1,0],
	[0,-1],
	[-1,0]
];

function setup() {
  createCanvas(800,600);
  background(51);

	for(var i = 0 ; i < 60 ; i++){
		table[i] = [];
		for(var j = 0 ; j < 80 ; j++){
			table[i][j] = 0;
		}
	}
	console.log(table);
}

function drawTable(){
	background(51);
	for(var i = 0 ; i < 60 ; i++){
		for(var j = 0 ; j < 80 ; j++){
			if(table[i][j] == 1){
				fill("#0579fa");
				rect(i * 10, j * 10, 9, 9);
			}
		}
	}
}

function mouseClicked(){
	var tx = mouseX;
	var ty = mouseY;
	
	var x,y;
	for(var i = tx; i >= 0 ; i--){
		if(i%10 == 0){
			x = i/10;
			break;
		}

	}
	for (var i = ty; i >= 0; i--) {
		if (i % 10 == 0){
			y = i/10;
			break;
		}
	}
	console.log(x,y);
	table[x][y] = table[x][y]==0 ? 1 : 0;
}

var iY = 30;
var iX = 40;
var dir = 0;
function draw() {
	drawTable();
	let newX = iX + dirs[dir][0]
	let newY = iY + dirs[dir][1]

	if(table[newY][newX] == 1){
		dir++;
		if (dir == 4)
			dir = 0;
	}
	else{
		dir -= 1
		if (dir == -1)
			dir = 3
	}

	if (table[iY][iX] == 0)
		table[iY][iX] = 1;
	else
		table[iY][iX] = 0;

	iY = newY
	iX = newX

}