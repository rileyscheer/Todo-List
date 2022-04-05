function night() {
    leftColumn.style.backgroundColor = "black";
    leftColumn.style.color = "white";
    leftColumn.style.boxShadow = "0px 0px 0px";

    content.style.backgroundColor = "rgb(50, 50, 50)";
    content.style.color = "white";

    taskScreen.style.backgroundColor = "rgb(27, 27, 27)";
    taskScreen.style.boxShadow = "0px 0px 0px";

    taskSvg.classList.remove("task-svg")
    taskSvg.classList.add("dark")
}

function day() {
    leftColumn.style.backgroundColor = "rgb(211, 211, 211)";
    leftColumn.style.color = "black";
    leftColumn.style.boxShadow = "0px 0px 15px";

    content.style.backgroundColor = "white";
    content.style.color = "black";

    taskScreen.style.backgroundColor = "rgb(211, 211, 211)";
    taskScreen.style.boxShadow = "0px 0px 15px";

    taskSvg.classList.remove("dark")
    taskSvg.classList.add("task-svg")


}

export {night, day}