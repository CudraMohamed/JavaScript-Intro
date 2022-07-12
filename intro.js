var a=5+5 //number
console.log(a)
//a="Cudra"
const b='Cudra' //string
var c=`Mohamed`  //string
//b="Douglas"
console.log(typeof b)
console.log(typeof a)
console.log(a,b,c)
var d=true  //boolean
console.log(typeof d)
var e =["word",1,true]
console.log(e)
console.log(typeof e)
var f=[1,2,3,false,e]
console.log(f)
var g={school:"AkiraChix","primary school":"Primary"}
console.log(g)
console.log(g["primary school"])  //accessing objects
console.log(g.school)  //accessing objects
g["school"]="KU"  //changing values
g.school="MT.K"   //changing values
g["workplace"]="iHub"  //setting new values
console.log(g)
g.javascript=true
console.log(g)
g["home/address"]="Ngong"
console.log(g)
g["a"]=a
console.log(g)

//Assignment
const name_ ="Cudra" //string
console.log(name_)
var age =21       //number
console.log(age)
var isStudent = true //boolean
console.log(isStudent)
var favColors = ["Black","Jungle Green","Grey"]  //arrray
console.log(favColors)
var profile = {name:"Cudra", age:21, student_status:"Enrolled",favorite_color1:"Green",favorite_color2:"Black"} //object
console.log(profile)
var myAgeInTenYears=[21+10] //addition in arrays
console.log(myAgeInTenYears)
profile["myAgeInTenYears"]=31
console.log(profile) //setting new values

console.log('Welcome','to','JavaScript')    //console.log() can take more than one argument
//single-line /*multiline*/
//syntax-structure of statements in a computer language
//Debugging-process of identifying and removing errors from a program

// Pick a string. Your string can have any number of characters.
var my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
var ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);

var my_string = "Udacity";

// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}

console.log("green">"Green")

//array literal []
const array1=["eat","sleep"]
console.log(array1)

//new keyword
const array2=new Array("meat","leo")
console.log(array2)

//empty array
const myList=[];

//array of numbers
const numberArray=[2,3,6,7,8];

const newData = [
  {'tasks':'exercise'},
  [1,2,3],
  function hello(){console.log('hello')}
];

//accessing elements of an array
//using indices
const myArray=['h','e','l','l','o'];
 console.log(myArray[0]);   //first element

 //Arrays index start with 0

 //add an elent to an array
 let dailyActivities=['eat','sleep'];
 dailyActivities.push('exercise');   //push-adds element at the end
 console.log(dailyActivities)

 let dailyAct=['eat','shower'];
 dailyAct.unshift('wear');   //adds elements at the start
 console.log(dailyAct)

 dailyActivities[2]='poa';
 console.log(dailyActivities)

 function Person(){
  this.name='John',
  this.age=23
 }
 const person = new Person();

 //checking the prototype value
 console.log(Person.prototype)

 //Array object
 let names=[
  {name:"Tut",Age:70},
  {name:"Yut",age:50},
  {name:"Leo",age:20},
  {name:"Pleo",age:30}
 ]
 console.log(names[1]["age"]);    //accessing index
 console.log(names[1].age);

 //accessing ages using map
names.map(item=> console.log(item.age));
// names.filter(item)=> return item.age>70
// console.log(names)

let findAkuot=names.find(x=>x.name="Tut");    //access a specific value
console.log(findAkuot)

// names.filter(v=> console.log(v<30));

//filtered array
function biggerThanTen(value){
  return value>=10;         //filteres numbers less than 10
}
let filtered=[12,3,20,1,5,15].filter(biggerThanTen);    //values->filter->function name
console.log(filtered)
