
const buttonContainer	=	document.querySelector("#buttonContainer");
const container			=	document.querySelector("#container");
const buttonElement		=	document.createElement("button");
let	gridNumber			=	0;
let containerWidth		=	0;

buttonElement.textContent	=	"Start GAME!";
const btnStartGame			= 	buttonContainer.appendChild(buttonElement);

const gridGenerator = () => {
	for (let i = 0; i < (gridNumber * gridNumber) && i < 100*100; i++){
		let gridWrapper	= document.createElement("div");
		let gridItem	= document.createElement("div");
		let currentOpacity = 1;

		gridWrapper.classList.add("grid-wrapper");
		gridItem.classList.add("grid-item");
		
		gridItem.addEventListener("mouseover", () => {
			if (currentOpacity > 0.05){
				gridItem.dataset.opacity = currentOpacity.toFixed(1);
				gridItem.style.opacity = currentOpacity;
				currentOpacity -= 0.1;
			}
			if (!gridItem.style.backgroundColor){
				let randomColor = `rgb(
					${Math.floor(Math.random()*256)},
					${Math.floor(Math.random()*256)},
					${Math.floor(Math.random()*256)})`
					/* divElement.classList.add("grid-item-active"); */
					gridItem.style.backgroundColor = randomColor;
				}
			});
			
		gridWrapper.appendChild(gridItem);
		container.appendChild(gridWrapper);
	}
}
 
btnStartGame.addEventListener("click", () => {
	container.innerHTML = "";
	gridNumber = prompt("Enter the size of your grid max 100");
	while (gridNumber > 100){
		gridNumber = prompt("MAX 100");
	}
	containerWidth = (gridNumber * 20) + ((gridNumber - 1) * 2);
	container.style.cssText = `width: ${containerWidth}px !important`;
	gridGenerator();
});



