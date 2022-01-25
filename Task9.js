function theVowels (theString) {
    // printing out all vowels in a string on the console
    var theOutput = theString.match(/[aeiou]/ig).join("");
    console.log(theOutput)  
}
theVowels("Umuzi")




