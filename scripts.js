let gridDim = 16;

const container = document.getElementById("container");

function makeGrid(rows, cols) {
	for (let i=0; i<(rows*cols); i++) {
		let cell = document.createElement("div");
		container.appendChild(cell).classList.add("grid");
	}
};

makeGrid(gridDim, gridDim);


let grid = document.getElementsByClassName("grid");
for (i=0;i<grid.length;i++) {
  grid[i].addEventListener("mouseover", e => e.target.classList.add("color-in"))
};