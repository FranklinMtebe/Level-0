function commonLetters(string1, string2) {
    let duplicateCharacters = "";
    const theSpace = ",";
    for (let i = 0; i < string1.length; i += 1) {
      if (duplicateCharacters.indexOf(string1[i]) === -1) {
        if (string2.indexOf(string1[i]) !== -1) {
          duplicateCharacters += string1[i];
        }
      }
    }
    const theOutput = duplicateCharacters.split("").join(theSpace);
    return "Common letters: " + theOutput;
  }
  console.log(commonLetters("computers", "house"));
  