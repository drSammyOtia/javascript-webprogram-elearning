console.log('Welcome to the platform');
let name = 'Doricas Otia';
             //console.log(name);

          //Example of primitive Variables
         // Numbers, Strings, Boolean, Null, Undefined
let firstname = 'Sammy'; // A string Literal
let secondName = 'Otia'; // A string Literal
let surnName = 'Oile'; // A string Literal
let lastName; // by default it is reffered to as undefined variable becasue 
             //it has not been initialized 
let age = 24; // Number Literal
let isApproved = true; // Boolean Literal(can be either true or false) 
               //and both true and false are reserved keyword cannot be variable names
let selectedCourse = null; // we use null by default 
             // when no course is selected, to explicity 
            // clear the value of variable

console.log(firstname, secondName, surnName, age, 
    isApproved, selectedCourse);

const aggregatedPoints = 3.89;
           //interestRate = 1;

console.log(aggregatedPoints);

        // Reference Types
       // Arrays, Objects & functions
      // This are usefull when we are
     // dealing with M U L T I P L E OR related variables 
    // properties thus we put this varaibles inside an object
 

 let person = { // this syntax or callibraces is called object literal
               // herein we add 1 or more key value pairs
              // keys are the properties of this object
    name: 'Sammy',
    age : 24

          // in this case this person has two properties or keys
 };

        // There are Two ways to work with the properties
       //1. Dot Notation
      // Consice, cleaner & shorter
 person.name = 'Doricas'

  console.log(person.name);

   //1. Bracket Notation

   person['name'] = 'Gladys'

// Arrays

let selectedProgrammingLanguage = ['python', 'C++'];
selectedProgrammingLanguage[2] = 1; //Array can store any type of datatypes in JS

console.log(selectedProgrammingLanguage.length);

// A Function to perform a task (Display smthng on a console)
function message(name, lastName) {  // name is the parameter of the message function,
                        // A Parameter is declared at the begginning of the function
  console.log('Dear ' + name + ' ' + lastName);
}
 message('Doricas', 'Otia'); //Doricas is an aggument to the message function
                    //An arggument is the actual value to the parameter     

 message('Sammy', 'Otia');

// A Function to calculate smthng

function square(number) {
  return number * number;
}

console.log(square(8));
















