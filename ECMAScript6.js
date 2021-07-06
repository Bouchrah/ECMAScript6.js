//1 Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)


// let user = "John"
// let Age ="30"

// const userName = () =>{

//     if(user ="John" , Age ="30"){ console.log(user,Age)
//     }
//     else{
//     console.log("Error")
//     }

//  }
// userName()



// ####################################################################################
// 2)Give the right name:

// Create the variable with the name of our planet. How would you name such a variable?
// Create the variable to store the name of the current visitor. How would you name that variable?

// const our planet = 

    // const visitor = 



// ######################################################################################

// 3)Look at the code. What will be result of the call at the last line and why?


// let phrase = "Hello"

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`)
//   }
// }

// sayHi()

// Hello, John

// ####################################################

// 4)Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// var user = {}

// user.name ="john"

// user.surname ="Smith"

// user.surname =("Pete")

// console.log(user)


// ######################################################

// 5)Is it possible to change an object declared with const, how do you think and why?
// you need here a function

// const user = {
//   name: "John"
//   }

// // does it work?
// user.name = "Pete"

// const user = (name) => {
//      name: "John"
//      console.log(name)
//    }
//    user('Pete') 

// #############################################################

// 6) We have an object storing salaries of our team:

// let salaries = {
//     "Fred": 100,
//     "Ted": 160,
//     "Ghaith": 130
//   };
//    let sum = 0;
//     for (let allsalaries of Object.values(salaries)) {
//     sum += allsalaries;
//   }
//   sum > 0 ? console.log(sum): console.log(0) 

// ###########################################################

// //  7)Rewrite this if using the ternary operator '?'

// let a = 1;
// let b = 5;
// let result = 'Below'
// let result_N = 'over'
// a + b < 4 ? console.log(result) : console.log(result_N) 

// ##############################################################
// 8)Rewrite if..else using multiple ternary operators '?'.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let message;
let login ='Employee';
let message_one = 'Hello';
let message_two = 'Greetings';
let message_three = 'No login';
let message_four= ' ';

login == 'Employee'? console.log(message_one)
:(login == 'Director') ? console.log(message_two)
:(login == '') ? console.log(message_three)
:console.log(message_four)





