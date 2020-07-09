

function addDiv () {
    let newDiv = document.createElement("div");
    let currentDiv = document.getElementById("main");
    let comment = document.createComment("hello");
    currentDiv.appendChild(newDiv);
    document.body.appendChild(comment);
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
    const reset = document.getElementById("reset");
    const s = document.getElementsByClassName("square");   
    s.style.background = "white";
    console.log("Hello")
    //How can i change an elements class with javascript SO
}

for(let i = 0; i<16; i++){
    addDiv();   
}


