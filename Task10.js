
function commonLetters (string1, string2) {
    // Finding common characters/letters
    var duplicateCharacter = "";
    for (var i = 0; i < string1.length; i += 1) {
    if (duplicateCharacter.indexOf(string1[i]) === -1) {
    if (string2.indexOf(string1[i]) !== -1) {
        duplicateCharacter += string1[i];
    }
    }
    }
return duplicateCharacter;
}
console.log(commonLetters("house", "computers"));
