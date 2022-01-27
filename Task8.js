function numberToTime(number){ 
    let string1;
    let string2;
    let hours = Math.floor(number / 60);  
    let minutes = number % 60;
    if (hours > 1 && minutes > 1){
        string1 = "Hours";  
        string2 = "Minutes";
    } else {
        string1 = "Hour";  
        string2 = "Minute";
    }
    console.log(hours +" "+ string1 +", " + minutes +" "+ string2 + ".");        
}
numberToTime(133)