let a = document.querySelector("#blue");
let b = document.querySelector("#green");
let c = document.querySelector("#yellow");
let bg = document.querySelector(".background");
let btn = document.querySelectorAll(".button");

btn.forEach(function (button) {
    console.log(button)
    button.addEventListener("click", function (e) {
        console.log(e)
        console.log(e.target)
        if (e.target.id === "blue") {
            bg.style.backgroundColor = "blue";
            a.style.border = "2px solid white" 
        }
        if (e.target.id === "green") {
            bg.style.backgroundColor = "green";
            b.style.border = "2px solid white" 
        }
        if (e.target.id === "yellow") {
            bg.style.backgroundColor = "yellow";
            c.style.border = "2px solid black" 
        }
        
    })
});