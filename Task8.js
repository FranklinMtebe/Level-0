function numberToTime(number){ 
    // Variable declaration & initialising
     var string1 = "hours";
     var string2 = "minutes";
    // Converting numbers to hours and minutes
    var hours = Math.floor(number / 60);  
    var minutes = number % 60;
    if (hours > 1){
        string1;  
    } else if (minutes > 1) {
        string2; 
    } else if  (hours <= 1){
        string1 = "hour";
    } else if (minutes <= 1) {
        string2 = "minute";
    } else {
        console.log ("no arguments have been passed to this function")
    }
    console.log(hours +" "+ string1 +", " + minutes +" "+string2 + ".");        
}

numberToTime(133)