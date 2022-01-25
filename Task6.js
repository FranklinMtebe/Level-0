function maximum (number1, number2, number3) {
    //finding the maximum number
    if(number1 > number2 && number1 > number3) {
        console.log("The maximum number is: " + number1);
    }
    else if(number2 > number1 && number2 > number3){
        console.log("The maximum number is: " + number2);
    }
    else if(number3 > number1 && number3 > number1){
        console.log("The maximum number is: " + number3);
    }
}
maximum(1,2,3)