

let left = document.querySelector(".left");
let Right = document.querySelector(".Right");
let Items = document.querySelectorAll(".Item");


for (let item of Items) {
  item.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", e.target.id); 
  });
}


Right.addEventListener("dragover", function (e) {
  e.preventDefault(); 
});

Right.addEventListener("drop", function (e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain"); 
  const draggedElement = document.getElementById(id); 
  if (draggedElement) {
    Right.appendChild(draggedElement); 
  }
});


left.addEventListener("dragover", function (e) {
  e.preventDefault(); 
});

left.addEventListener("drop", function (e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain"); 
  const draggedElement = document.getElementById(id); 
  if (draggedElement) {
    left.appendChild(draggedElement); 
  }
});
