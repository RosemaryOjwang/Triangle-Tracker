//Business Logic
function equilateralTriangle()  {
    document.getElementById("result").innerText = "Equlateral";
}
function notTriangle()  {
    document.getElementById("result").innerText = "Not a Triangle";

}
function scaleneTriangle()   {
    document.getElementById("result").innerText = "Scalene Triangle";
}
function isoscelesTriangle()   {
    document.getElementById("result").innerText = "Isosceles Triangle"
}

function trackTriangle(a, b, c)    {
    //get values of the sides
    
    if (a === b && a === c)  {
        equilateralTriangle();
    } else if (a === b || a === c || b === c) {
        isoscelesTriangle();
    } else if (side1 !== side2 && side2 !== side3  && side1 !== side3)  {
        scaleneTriangle();

    }
}


//User Interface
function handleSubmit(event) {
event.preventDefault();    
let side1 = document.getElementById("side1").value;
let side2 = document.getElementById("side2").value;
let side3 = document.getElementById("side3").value;

let result = trackTriangle(side1, side2, side3);
document.getElementById("result").innerText = result;

}

window.addEventListener("load", function()  {
    const form = document.getElementById("sides");
    form.addEventListener("submit", handleSubmit)
});
