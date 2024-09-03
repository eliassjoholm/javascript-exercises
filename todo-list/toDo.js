let button = document.getElementsByClassName("button");
button[0].addEventListener("click", addtask);

function addtask(){
    let task = document.createElement("li");
    let list = document.querySelector("ul");
    task.innerText = text.value;
    list.appendChild(task);
    text.value = "";
    task.addEventListener("click", ()=> list.removeChild(task));

}