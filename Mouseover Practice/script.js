function changeColor(element){
    element.style.backgroundColor = element.innerText
}

function changeBack(element) {
    element.style.backgroundColor = "white"
}

function floodPageColor(element) {
    document.getElementById("container").style.backgroundColor = element.innerText;
    document.getElementById("main-title").style.color = element.innerText;
}
