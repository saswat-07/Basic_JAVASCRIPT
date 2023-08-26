/*
    Challenge 2 - Validate Values
*/

let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName
if (typeof(firstName)=="string") {
    console.log("FirstName value is defined and type is string");
} else {
    console.log("First Name value must be of type String");
   console.log(" First Name value must not be undefined ");
}

// Provide solution code here for Validating LastName
if (typeof(lastName)=="string") {
   console.log("LastName value type is string"); 
} else {
    console.log("Last Name value must be of type String value");
}

// Provide solution code here for Validating Age
if (age>=18 && age<=60) {
    console.log("Age value is between 18 and 60");
    if (typeof(age)=="number") {
        console.log("Type Number");
    } else {
        console.log("Age value must be of type Number");
    }
} else {
    console.log(" Age value must not be undefined ");
    console.log("Age value should be between 18 and 60");
}

// Provide solution code here for Validating isMarried
if (typeof(isMarried)=="boolean") {
    console.log("Type is Boolean");
} else {
    console.log("IsMarried value must be of type Boolean ");
}

// Provide solution code here for Validating City
if (typeof(city)=="string") {
    console.log("Type is string");
} else {
    console.log("City value must be of type String ");
}

// Provide solution code here for Validating State
if (typeof(state)=="string") {
    console.log("Type is String");
} else {
    console.log("State value must be of type String");
}
 
// Provide solution code here for Validating Postal Code
if (typeof(postalCode)=="string") {
    console.log("Type is string");
} else {
    console.log("Postal Code value must not be undefined ");
    console.log("Postal Code value must be of type String");
}
 