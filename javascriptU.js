// //Function reverses the order of characters in a word
// function rev(w){
//     var revW="";
//     //loop over the characters in reverse order
//     for(var i = w.length -1;i >= 0;i--){
//         //adds characters to a new word
//         revW=revW.contact(w[i]);
//     }
//     return revW;
// }
// rev("Cudra")

//implicit type coercion-> changing a type to the other to meet the operation conditions
console.log("Hello" + 5*10)

var quote="Stay awhile and listen";
console.log(quote[6])
console.log(quote.charAt(0)) //strings method to access individual character

console.log("This man whispered.\"please speak to me\"");   //escaping sequence to skip a string

function alphabet_order(str){       //returning a passed string with letters in alphabetical order
    return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));

