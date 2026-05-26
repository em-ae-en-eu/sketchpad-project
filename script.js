let container = document.getElementById("container");

const button = document.getElementById("chng-grid-btn");
button.addEventListener('click' , () => {
    container.innerHTML = "";
    let tempButton = prompt('Enter grid size you want');
    createGrid(tempButton);
   
})

function createGrid(size){
    for(let i = 1; i <= size*size; i++){
        const div = document.createElement("div");
        div.style.width = (960 / size) + "px";
        div.style.height = (960 / size) + "px";
        container.appendChild(div);

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        })
    }
}

createGrid(16);

