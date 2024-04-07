let inputField = document.getElementById("inputField");
let addBtn = document.getElementById("addBtn");
let container = document.getElementById("container");

addBtn.onclick = function () {
  if (inputField.value == "") {
    divTask.remove();
  } else {
    let divTask = document.createElement("div");
    divTask.style.display = "flex";
    divTask.style.alignItems = "center";
    divTask.style.cursor = "pointer";
    divTask.style.marginTop = "20px";
    divTask.style.position = "relative";

    let unchecked = document.createElement("img");
    unchecked.src = "./css/imgs/unchecked2.webp";
    unchecked.style.width = "20px";

    let par = document.createElement("p");
    par.style.marginLeft = "10px";
    par.style.textAlign = "left";
    par.style.fontSize = "13px";
    par.style.color = '#fff'
    par.innerHTML = inputField.value;

    divTask.appendChild(unchecked);
    divTask.appendChild(par);
    appArea.appendChild(divTask);

    inputField.value = "";

    // Delete Icon Section
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "./css/imgs/deletIcon2.png";
    deleteIcon.style.width = "10px";
    deleteIcon.style.borderRadius = "20px";
    deleteIcon.style.position = "absolute";
    deleteIcon.style.right = "0";

    divTask.appendChild(deleteIcon);

    deleteIcon.onclick = function () {
      divTask.remove();
    };
    // Click On Created Task Process
    divTask.onclick = function () {
      unchecked.setAttribute("src", "./css/imgs/checked2.jpg");
      unchecked.style.borderRadius = "10px";
      par.style.textDecoration = "line-through";
    };
  }
};

// Styling Input Field
inputField.onmouseenter = function () {
  inputField.style.border = "solid rgb(105, 163, 201) 1px";
};
inputField.onmouseleave = function () {
  inputField.style.border = "none";
};
