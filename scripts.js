const grid = document.getElementById("grid");

function makeGrid(gridSize) {
	for (let i=0; i<(gridSize**2); i++) {
		let unit = document.createElement("div");
		grid.appendChild(unit).classList.add("grid");
	}
};

makeGrid(16);


let cell = document.getElementsByClassName("cell");
for (i=0;i<cell.length;i++) {
  cell[i].addEventListener("mouseover", e => e.target.classList.add("color-in"))
};