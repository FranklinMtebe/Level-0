function theVowels(theString) {
    const theSpace = " ";
    theSplitedString = theString.split("").join(theSpace);
    let theLowerCaseString = theSplitedString.toLowerCase().split(" ");
    let theExtractedString = theLowerCaseString
      .filter((value, index, src) => {
        return src.indexOf(value) == index;
      })
      .join(" ");
    const theOutput = theExtractedString.match(/[aeiou]/gi).join(", ");
    console.log("The vowels in lowercases are: " + theOutput);
  }
  theVowels("Umuzi");