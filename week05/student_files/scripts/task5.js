/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let date = new Date();

// Step 2: Declare another variable to hold the day of the week
let day;
// Step 3: Using the variable declared in Step 1, sign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
let dayOfWeek = date.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let message;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

        
if (dayOfWeek >= 1 && dayOfWeek <= 5 ) {
    message =  "Hang in there!"
       
          
}
      
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
  message = "Woohoo! It is the weekend";
}
console.log(message);
 
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let anotherMessage;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (new Date().getDay()) {
  case 0:
    anotherMessage = "Sunday";
    break;
  case 1:
    anotherMessage = "Monday";
    break;
  case 2:
    anotherMessage = "Tuesday";
    break;
  case 3:
    anotherMessage = "Wednesday";
    break;
  case 4:
    anotherMessage = "Thursday";
    break;
  case 5:
    anotherMessage = "Friday";
    break;
  case  6:
    anotherMessage = "Saturday";
}

console.log(anotherMessage);
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

document.getElementById("message1").innerHTML = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").innerHTML = anotherMessage;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples

let temples = []

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children


function output(temples){

console.log(temples)

let articleElement = document.getElementById('temples');



for (let i = 0; i < temples.length; i++) {
let temple = temples[i]
let h3 = document.createElement("h3");
let location = document.createElement("h4");
let dedicated = document.createElement("h4");
let image = document.createElement("img");
let article = document.createElement("article");

  h3.innerHTML = temple.templeName;
  location.innerHTML = temple.location;
  dedicated.innerHTML = temple.dedicated;
  image.setAttribute('src', temple.imageUrl);

  article.appendChild(h3);
  article.appendChild(location);
  article.appendChild(dedicated);
  article.appendChild(image);
// - Appends the <article> element to the HTML element with an ID of temples
  articleElement.appendChild(article);
}
};

// Step 3: Create another function called getTemples. Make it an async function.

async function getTemples(){
  let response = await fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json");
  return await response.json();
}
getTemples().then((res)=> temples = res);
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
  // let  = document.getElementById('temples');
  // temples.innerHTML = '';
  return document.getElementById('temples').innerHTML = '';

}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

function sortBy(event) {
  // - Calls the reset function
  reset();

  let order = event.target.value
  
  if (order == "templeNameAscending") {
    let sorted = temples.sort((a,b) => a.templeName < b.templeName ? -1:1);
    return output(sorted);

  }else if (order == "templeNameDescending") {
    let sorted = temples.sort((a,b) => a.templeName > b.templeName ? -1:1);
    return output(sorted);
  };
  
}; 



// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById('sortBy').addEventListener("change", sortBy);


/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files


