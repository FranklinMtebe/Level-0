function triangleArea(side1, side2, side3) {
    const length = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(
      length * ((length - side1) * (length - side2) * (length - side3))
    );
    return area;
 
  }
  triangleArea(2, 3, 4);