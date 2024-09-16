// #1 
// Datatypes in JS: primitive 7 : number, bigint, string, boolean, undefined, null, symbol; non-primitive: object, arrays, functions. 
// (a)
// console.log(typeof undefined) //undefined
// console.log(typeof null)      //object
// (b) bigint is for integers too big to be stored by number. JS has a 64-bit floating point format. 
//console.log(Number.MAX_VALUE) //1.7976931348623157e+308

// #2
// (a)
// const id = Symbol ('123')
// console.log(id)
// console.log(typeof id)
// const anotherId = Symbol('123')
// console.log(id === anotherId);

// (b)
// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }
// const myFunction = function(){
//     console.log("Hello world");
// }
// myFunction()

// #3
// const immutable, let and const are preferred over var because of block scope issues.(var can be declared later)
//JS Hoisting: mechanism by which all declarations are moved to the top of the code. So inevitably, wherever the functions are declared, they are moved to the top of their scope regardless if ther are local or global.

// #4
//When "adding" numbers and strings, the numbers are converted to strings.
//Expressions evaluated from left to right so these results are different:
// let c1="violet"+16+4
// console.log(c1) //violet164
// let c2=16+4+"violet"
// console.log(c2) //20violet

// #5
//Conversion:

// let value = Number("a")
// console.log(typeof value)//Number
// console.log(value) //NaN
// value = Number("33")
// console.log(value) //33
// value = Number(true)
// console.log(value) //1 //false=>0
// let isLoggedIn="sayanwita"
// let iLi = Boolean (isLoggedIn)
// console.log(iLi) //true
// "kjfhjhfj" => true; "" => false

// #6
//Comparisons

// console.log("2" > 1)       //true
// console.log("2" === 2)     //false
// console.log(null > 0)      //false
// console.log(null == 0)     //false
// console.log(null < 0)      //false
// console.log(undefined > 0) //false

// #7
//String

// let name="Sayan"
// let id="2210052"
// console.log(`Hey ${name}! Your id is: ${id} `)

// const gameName = new String('hitesh-hc-com')
// console.log(gameName[0])                    //h
// console.log(gameName.__proto__)             //String('')
// console.log(gameName.length);               //13
// console.log(gameName.toUpperCase());        //HITESH-HC-COM
// console.log(gameName.charAt(2));            //t
// console.log(gameName.indexOf('h'));         //0
// console.log(gameName.split('-'));           //(3) ['hitesh', 'hc', 'com']
// const newString = gameName.substring(0, 4)  
// console.log(newString);                     //hite
// const anotherString = gameName.slice(2, 4)  
// console.log(anotherString);                 //te
// const newStringOne = "   hitesh    "
// console.log(newStringOne.trim());           //hitesh    
// const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '-'))        //https://hitesh.com/hitesh-choudhary
// console.log(url.includes('sundar'))         //false


// #8
//Number

// const balance = new Number(100)
// console.log(balance.toString()); //100
// console.log(balance.toFixed(2)); //100.00
// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); //Number of significant digits // 123.9
// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000
// console.log(hundreds.toLocaleString('en-US')); //1,000,000

// #9
//Math

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// #10
// Dates

//let myDate = new Date()
// console.log(myDate)                     //Tue Sep 10 2024 23:41:29 GMT+0530 (India Standard Time)
// console.log(myDate.toString());         //Tue Sep 10 2024 23:41:29 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());     //Tue Sep 10 2024
// console.log(myDate.toLocaleString());   //10/9/2024, 11:41:29 pm
// console.log(typeof myDate);             //object

// let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getMonth());     //8 //Jan =>0
// console.log(newDate.getDay());       //Monday

// let myCreatedDate = new Date(2024, 8, 8, 5 ,3) 
// console.log(myCreatedDate)                      //Sun Sep 08 2024 05:03:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.getDay())             //0


// #11
//Arrays

// const myArr=[0,1,2,3,4,5,6,7]
// //end:
// myArr.pop()
// myArr.push(8)
// console.log(myArr) //(8) [0, 1, 2, 3, 4, 5, 6, 8]
// //start:
// myArr.shift()
// myArr.unshift(9)
// console.log(myArr) //(8) [9, 1, 2, 3, 4, 5, 6, 8]

// console.log(myArr.includes(9)); //true
// console.log(myArr.indexOf(3));  //3

// const newArr = myArr.join("+")
// console.log( newArr); //9+1+2+3+4+5+6+8

// console.log("A ", myArr);       //A  (8) [0, 1, 2, 3, 4, 5, 6, 7]
// const myn1 = myArr.slice(1, 3)  //does not change myArr
// console.log(myn1);              //(2) [1, 2] //Does not include element at 3
// console.log("B ", myArr);       //B  (8) [0, 1, 2, 3, 4, 5, 6, 7]
// const myn2 = myArr.splice(1, 3) //changes myArr
// console.log("C ", myArr);       //C  (5) [0, 4, 5, 6, 7]
// console.log(myn2);              //(3) [1, 2, 3] //Includes element at 3     

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //(4) ['thor', 'Ironman', 'spiderman', Array(3)]
// console.log(marvel_heros[3][0]) //superman
// marvel_heros.pop()
// let allHeroes= marvel_heros.concat(dc_heros)
// console.log(allHeroes) // (6) ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']
// allHeroes= marvel_heros + dc_heros
// console.log(allHeroes) // thor,Ironman,spidermansuperman,flash,batman
// allHeroes=[...marvel_heros, ...dc_heros]
// console.log(allHeroes) //(6) ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3));

// #12
//Objects

// (a) 
// const mySym = Symbol("key1")
// let JsUser = {
//     name: "Sayanwita",
//     "full name": "Sayanwita Dey",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Kolkata",
//     email: "dey.sayanwita7@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// JsUser.email = "sayanwita.dey@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "sayanwita.dey@microsoft.com"
// console.log(JsUser.email);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// console.log(JsUser.greeting);

// JsUser.greeting = function(){
//     console.log(`Hello ${this.name}, your last known location is : ${this.location}`)
// }
// console.log(JsUser.greeting())

// (b) Key, value and entries
// const tinderUser = {}
// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// (c) Joining objects
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}
//const obj3 = { obj1, obj2 } //{obj1: {…}, obj2: {…}}
//const obj3 = Object.assign({}, obj1, obj2, obj4) //{1: 'a', 2: 'b', 3: 'a', 4: 'b', 5: 'a', 6: 'b'}
//const obj3 = {...obj1, ...obj2} //{1: 'a', 2: 'b', 3: 'a', 4: 'b'}
// console.log(obj3);

// (d) Renaming
// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }
// const {courseInstructor: instructor} = course
// console.log(instructor);


// #13
//Function and arrow function

//Functions are hoisted.
// console.log(addone(5))
// function addone(num){
//     return num + 1
// }

//Arrow functions are not hoisted.
// const addTwo = (num1, num2) => {
//     return num1 + num2
// } //Mandatory to write return when putting up {}
// const addTwo = (num1, num2) => ( num1 + num2 ) //Return is implicit when {} is absent; () important when returning objects.
// console.log(addTwo (1,2))

// #14
//Immediately Invoked Functions
// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// #15
// Truthy and falsy values
// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values: "0", 'false', " ", [], {}, function(){}

// const userEmail = []
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// dsjkhdugdsf