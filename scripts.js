let currentSize = prompt("What size should the grid be? (1-100)");

function makeGrid(gridSize) {
	for (let i=0; i<(gridSize**2); i++) {
		let unit = document.createElement("div");
		grid.appendChild(unit).classList.add("grid");
	}
};

makeGrid(currentSize);

let cell = document.getElementsByClassName("grid");
for (i=0;i<cell.length;i++) {
  cell[i].addEventListener("mouseover", e => e.target.classList.add("color-in"))
};