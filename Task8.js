function numberToTime(number) {
    let string1;
    let string2;
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    if (hours === 1) {
      string1 = "Hour";
    } else {
      string1 = "hours";
    }
    if (minutes === 1) {
      string2 = "Minute";
    } else {
      string2 = "Minutes";
    }
    if (number === 60) {
      console.log("0" + " Hours " + "60" + " Minutes,");
    } else {
      console.log(hours + " " + string1 + ", " + minutes + " " + string2 + ".");
    }
  }
  numberToTime(60);