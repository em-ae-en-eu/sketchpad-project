let container = document.getElementById("container");

function createGrid(size){
    for(let i = 1; i <= size*size; i++){
        const div = document.createElement("div");
        container.appendChild(div);

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        })
    }
}

createGrid(16);