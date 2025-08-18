console.log("This is tutorial 49");

// Character Classes
let regex = /\war/;         // word character - _ or alphabet or numbers
regex = /\w+d1r/;           // \w+ means one or more word characters
regex = /\Wbhai/;           // Non word character
regex = /\W+bhai/;          // \W means more than one Non word charcter
regex =  /number \d999/;    // \d means digit
regex =  /number \d+/;      // \d+ means more than one digit
regex =  /\D999/;           // \D means non digit
regex =  /\D+999/;          // \D+ means more than one  Non digit
regex =  /\ska number/;     // Match whitespace charcter 
regex =  /\s+ka number/;    // \s+ match one or more than one whitespace charcter 

regex =  /\Ska number/;     // Match non whitespace charcter 
regex =  /\S+ka number/;    // Match one or more than one non whitespace charcter
regex =  /4r5r\b/;          // Word Boundary

// Assertions
regex = /h(?=y)/;
regex = /h(?!y)/;
str = "harh7rd1r4r5r %%$@bhai hdrryi ka number 89999harry99999";  //\t = tab;



let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}