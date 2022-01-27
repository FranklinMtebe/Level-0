function theVowels (theString) {
    let theSpace = " "; 
    theSplitedString = theString.split("").join(theSpace);
    let theLowerCaseString = theSplitedString.toLowerCase().split(" ")
    let theExtractedString = theLowerCaseString.filter((value, index, src) => {
        return src.indexOf(value)
         == index
    }).join(" ")
        let theOutput = theExtractedString.match(/[aeiou]/ig).join(", ");
    console.log("The vowels in lowercases are: " + theOutput);  
    }
    theVowels("Umuzi")