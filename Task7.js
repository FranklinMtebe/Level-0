function temperature1(celsius) {
    //temperature from Celsius to Fahrenheit.
    var fahrenheit = celsius * (9 / 5) + 32;
    console.log("Fahrenheit: " + fahrenheit + " °F");
}
temperature1(30);

function temperature2(Fahrenheit) {
    //temperature from Fahrenheit to Celsius.
    var Celsius = (5 / 9)*(Fahrenheit - 32);
    console.log("Celsius: " + Celsius + " °C");
        
}
temperature2(20);
