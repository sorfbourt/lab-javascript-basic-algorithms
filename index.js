/*
Tried everything without searching on google first. My group partners found better and shorter ways to do them but I left my first attempt in the lab
*/

// Iteration 1: Names and Input
const hacker1 = "Jane";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);










// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length){
  console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
}
else if (hacker2Length > hacker1Length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
}
else if (hacker1Length == hacker2Length){
  console.log(`Wow, you both have equally long names, ${hacker2Length} characters!`);
}
else{
  console.log("error")
}










// Iteration 3: Loops
/*3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".*/
let hacker1capitals = hacker1.toUpperCase();
let output = "";
for(i=0;i<hacker1capitals.length;i++){
  if(i<hacker1capitals.length){
    output += `${hacker1capitals[i]} `;
  }
  else{
    output += `${hacker1capitals[i]}`;
  }
    
}
console.log(`${output}`)











/*3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".*/

let outputReverse = "";
for (j=hacker2.length;j>0;j--){
    outputReverse += `${hacker2[j-1]}`;
}

console.log(`${outputReverse}`)









/*3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first definitely.
What?! You both have the same name?*/

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let hacker1FirstLetter = hacker1[0].toLowerCase();
let hacker2FirstLetter = hacker2[0].toLowerCase();

let hacker1FirstLetterNumber = alphabet.indexOf(hacker1FirstLetter);
let hacker2FirstLetterNumber = alphabet.indexOf(hacker2FirstLetter);

if(hacker1FirstLetterNumber < hacker2FirstLetterNumber){
  console.log(`The driver's name goes first.`);
}
else if (hacker2FirstLetterNumber < hacker1FirstLetterNumber){
  console.log(`Yo, the navigator goes first definitely.`);  
}
else if (hacker1 == hacker2){
  console.log(`What?! You both have the same name?`);  
}
else if (hacker1FirstLetterNumber == hacker2FirstLetterNumber){
  console.log(`Both your names start with the same letter!`);  
}








/*
Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
*/

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa ex, tincidunt ut massa a, commodo tincidunt tellus. Sed et ante dolor. Curabitur eget lectus sapien. Maecenas in justo sit amet tortor molestie laoreet. Donec porta orci at nisl malesuada accumsan. Quisque lobortis posuere volutpat. Integer nisl ipsum, tristique quis tellus eu, molestie fringilla odio. Integer porttitor nisi tellus, in imperdiet nisi tincidunt nec. Aenean at accumsan orci, nec faucibus urna. Nulla vitae urna velit. Sed dignissim iaculis augue et rhoncus. Aliquam sit amet porta diam. Donec congue luctus enim.

Curabitur porttitor, ligula id mollis eleifend, nunc sem luctus lectus, ut pulvinar tortor ligula a urna. Aliquam vel ipsum orci. Morbi semper erat dictum enim euismod hendrerit. Aliquam vel tortor vel arcu congue consequat. Morbi molestie, elit id aliquet egestas, nulla ligula ultrices sem, a imperdiet purus dui vitae erat. In vitae fermentum nulla. Nam eu nibh lobortis, imperdiet metus eget, suscipit dolor. Proin cursus enim quis nisi eleifend tempor. Nunc viverra finibus mi vitae posuere. Quisque eu lacus ex. Morbi eget ex orci. Integer tincidunt a eros sit amet luctus.

Pellentesque lacinia nec tellus at mollis. Curabitur euismod magna vel sem lacinia, at blandit elit ultrices. Integer sollicitudin viverra erat, id sagittis sapien rhoncus a. Cras at sodales nibh. Morbi ac mauris ac sapien blandit fermentum sit amet vitae erat. Aliquam vestibulum ullamcorper ligula, quis convallis leo dapibus vitae. Ut sodales sapien erat. Nam ut tristique massa, a lobortis tortor. Vivamus at augue elit. Donec vehicula aliquam nibh a mattis. Quisque facilisis suscipit nisl eu posuere. Proin cursus lobortis enim at tempus. Duis eu quam nunc. Donec condimentum pharetra congue. Nam egestas mauris a ante tempus, id sollicitudin mi consequat.`








/*Make your program count the number of words in the string.
*/

let counter = 0;
for (l=0;l<longText.length;l++){
  if(longText[l] == " "){
    counter++;
  } 
}
console.log(`The word count for the longText variable is ${counter}`);








/*Make your program count the number of times the Latin word et appears.*/

let counter1 = 0;
for (m=0;m<longText.length;m++){
  if(longText[m] == " " && longText[m+1] == "e" && longText[m+2] == "t"){
    counter1++;
    //console.log(`${longText[m]}${longText[m+1]}${longText[m+2]}`);
  } 
}
console.log(`The number of times "et" appears as a word in longText is ${counter1}`);










/*Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" 
and "No 'x' in Nixon".
*/

let phraseToCheck = "No 'x' in Nixon";
let fullAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let justLetters = "";

//Take all non-letters out of string
for(n=0;n<phraseToCheck.length;n++){

  if(fullAlphabet.indexOf(phraseToCheck[n]) >= 0){

    justLetters += phraseToCheck[n].toLowerCase();
  }
  
}


console.log(justLetters);

let counterPalindrome = 0;
let counterNotPalindrome = 0;

//for loop, compare first letter to last letter
for(o=0;o<justLetters.length;o++){

//console.log(`${o} --- ${justLetters[o]}: ${justLetters.length-o-1} ~~ ${justLetters[justLetters.length-o-1]}: ${justLetters.length-o-1}`); 
  
  if(justLetters[o] !== justLetters[justLetters.length-o-1]){
    //console.log("This is NOT a palindrome!");
    counterNotPalindrome++
  } 
  else{
    //console.log("This is a palindrome!");
    counterPalindrome++
  }
 
}

//console.log("counterPalindrome: " + counterPalindrome);
//console.log("counterNotPalindrome: " + counterNotPalindrome);

if(counterNotPalindrome !== 0){
  console.log("Boo! This is NOT a palindrome!!!!!!!!");
}
else if (counterNotPalindrome == 0) {
  console.log("Yay! This is a palindrome!!!!!!");
}
