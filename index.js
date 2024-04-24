

let text = " let variable-1 ";
let TEXT = " let variable-2 ";

let LEN = text.length;

// [1,2].forEach(alert);

// let msg = "Hello, World!";
// msg = 12345;

// alert(msg); // number

// console.log(msg);

// let newmsg = 'msg + ${text}';
// let msg1 = 'msg';
// alert('hello, ${msg1}');

// alert(newmsg);

// let isSmaller = 4 < 1;

// alert(isSmaller);

console.log("string"/2);
// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation

// let text = "hello";
// console.log('hello, ${text}');

// UnDefined -> variable declared but not defined
// Null -> it is assignment value repressents absence of any objject value
// NaN -> Not-a-Number apprears whrn mathematic operations done on non numeric or cannot converted into number


// let name = "vijji";

// alert( `hello ${1}`);
// alert( `hello ${"name"}` );
// alert( `hello ${name} `);

// alert prompt confirm

// let result = prompt("Test");

// let isCorrect = confirm("Are yo sure?");

// alert(isCorrect);

//alert converts any value to string and mathematical operations to numbers


// let val = false;
// alert(typeof val);

// let value = String(val);
// alert(typeof value);

// alert( Boolean("0")); //t
// alert( Boolean(0)); //f
// alert( Boolean(""));    //f


//OR -> a chain of OR || returns the first truthy value or the last one if no truthy value is found.
//AND -> returns the first falsy value or the last value if none were found.

//  let res = prompt("age : ");

// (res>18) ? alert("eligible to vote") : alert("not eligible to vote");

// let msg = res < 18 ? "not eligible to vote" : 
// res < 60 ? "eligible to vote":
// "you are not human";

// alert(msg);

// || returns the first truthy value.
// ?? returns the first defined value.

// let city = prompt("which city : ");

// switch (city) {
//     case 'hyd':
//         alert('Hyderabad');
//         break;
//     default:
//         alert('thier is no such city');
// }

// function ask(quesion, yes, no) {
//     confirm(quesion) ? yes(): no();
// }

// function showOk(){
//     alert('every thing is good');
// }

// function showCancel(){
//     alert('not Okay');
// }

// ask("yes/no",showOk,showCancel);

// let age = prompt("Enter age :");
// let name = prompt("Enter name : ");

// let eligibility = (age<18) ? (name) => alert(`not eligible ${name}`) : (name) => alert(`eligible ${name}`);

// eligibility(name);

// let show = (question,yes,no) => {
//     confirm(question) ? yes() : no();
// }

// //  let ok = () => alert('okay done');
// //  let no = () => alert('not okay');

// debugger;

//  show(
//     "are yo okay",
//     function(){alert('okay done');},
//     function(){alert('not okay');}
//  );

// let user = {
//     name: "venkymonkey",
//     age: 23,
//     size :{
//         height: 186,
//         weight: 90
//     }
// };

// let newUser = Object.assign({}, user);

// user.size.weight = 100;
// alert( `user weight ${user.size.weight}`);
// alert( `${newuser.name} weight ${newUser.size.weight} `)

let user = {
    name: "jkl",
    age: 78,
    address:{
        road:""
    }
};

// alert(user.address ? user.address.street: undefined);

// alert( user?.address?.street); //undefined
// if user is present and address is optional then (user.address?.street);

// let user = null;
// let x = 0;

// user.name?.sayHi(x++);

// alert(x);

// let userAdmin = {
//     admin() {
//         alert("I am admin");
//     }
// };

// let  userGuest = {};

// userAdmin.admin?.();

// userGuest.admin?.();

// let key = "firstName";

let user1 = {
    firstName: "John"
};

// let user2 = {
//     name: undefined,
// };

// alert( user1?.[key] );
// alert( user2?.[key] );

// user2?.name = "john" //optional chaining has no use at the left side of assignment

// let id = Symbol("id");

// user[id] = 123;

// // alert( user1[id] );

// for (let key in user) alert(key);

// alert( "Direct: " + user[id] );

const cachedData = localStorage.getItem('cachedData');

if (cachedData) {

  // Data is available in LocalStorage, use it

  const parsedData = JSON.parse(cachedData);

  // Do something with the parsedData

  console.log('Data retrieved from cache:', parsedData);

} else {

  // Data is not available in LocalStorage, fetch it from the server

  fetch('https://api.example.com/data')

    .then(response => response.json())

    .then(data => {

      // Store the fetched data in LocalStorage for future use

      localStorage.setItem('cachedData', JSON.stringify(data));

      // Do something with the data

      console.log('Data fetched from server:', data);

    })

    .catch(error => {

      // Handle any errors

      console.error('Error fetching data:', error);

    });

}




















