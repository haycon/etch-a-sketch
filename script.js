

function addDiv () {
    let newDiv = document.createElement("div");
    let currentDiv = document.getElementById("main");
    let comment = document.createComment("");
    currentDiv.appendChild(newDiv);
    newDiv.appendChild(comment);
    newDiv.setAttribute("class","square")

    newDiv.addEventListener("mouseenter", () => {
        newDiv.style.background = "black";
    })

}

function comment(){
    var c = document.createComment("HELLO");
    document.body.appendChild(c);
}

function reset () {
    let s = document.getElementsByClassName("square") //querySelectorAll(".square");
    for (let i=0; i<16; i++){
        s[i].style.background="white"
    }
}

for(let i = 0; i<16; i++){
    addDiv();   
}


