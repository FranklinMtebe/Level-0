function triangleArea (side1, side2, side3) {
    //finding the area of a triangle
    var length =(side1+side2+side3)/2;
    var area = Math.sqrt(length*((length-side1)*(length-side2)*(length-side3))); 
    console.log("The area of the triange is: " + area);
}
triangleArea(2,3,4)