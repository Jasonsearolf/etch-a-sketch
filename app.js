
const buttonContainer	=	document.querySelector("#buttonContainer");
const container			=	document.querySelector("#container");
const buttonElement		=	document.createElement("button");

buttonElement.textContent	=	"Generar Grids";
const btnGridGenerator		= 	buttonContainer.appendChild(buttonElement);

const gridGenerator = () => {
	for (let i = 0; i < (16 * 16); i++){
		let divElement = document.createElement("div");
		divElement.classList.add("grid-item");

		divElement.addEventListener("mouseover", () => {
			divElement.classList.add("grid-item-active");
		});

		container.appendChild(divElement);
	}
}
 
btnGridGenerator.addEventListener("click", () => {
	container.innerHTML = "";
	gridGenerator();
});



