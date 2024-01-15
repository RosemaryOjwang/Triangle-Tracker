//Business Logic
function equilateralTriangle()  {
   console.log(document.getElementById("result").innerText = "Equilateral");
    document.getElementById("triangle").style.display = "block";
}
function notTriangle()  {
    document.getElementById("result").innerText = "Not a Triangle";
    document.getElementById("triangle").style.display = "block";

}
function scaleneTriangle()   {
    document.getElementById("result").innerText = "Scalene Triangle";
    document.getElementById("triangle").style.display = "block";
}
function isoscelesTriangle()   {
    document.getElementById("result").innerText = "Isosceles Triangle";
    document.getElementById("triangle").style.display = "block";
}

function trackTriangle(a, b, c)    {
    //get values of the sides
    
    if (a < c && b < c && a + b < c)    {
        "Not a triangle";
    } else if (a === b && a === c)  {
        equilateralTriangle();
    } else if (a === b || a === c || b === c) {
        isoscelesTriangle();
    } else if (a !== b && b !== c  && a !== c)  {
        scaleneTriangle();

    }
}


//User Interface
function handleSubmit(event) {
event.preventDefault();    
let side1 = document.getElementById("side1").value;
console.log(side1);
let side2 = document.getElementById("side2").value;
console.log(side2);
let side3 = document.getElementById("side3").value;
console.log(side3);
trackTriangle(side1, side2, side3);
//document.getElementById("result").innerText = results;

}

window.addEventListener("load", function()  {
    const form = document.getElementById("sides");
    form.addEventListener("submit", handleSubmit)
});
