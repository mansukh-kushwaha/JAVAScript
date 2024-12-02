// Create a function calculateArea that accepts two arguments: length and width. If width is not provided, it should default to the same value as length (for a square).

function calculateArea(length,width=length){
        console.log("Area of Square is",length*width);
}
calculateArea(20)