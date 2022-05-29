/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

const fullName = 'Erick Patino';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.querySelector('#name').innerHTML = `<h1>${fullName}</h1>`;
document.querySelector('#name').innerText = `<h1>${fullName}</h1>`;

// Step 3: declare and instantiate a variable to hold the current year

const currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file

document.querySelector('#year').innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture

const profileImage = 'images/picture_er.jpg';
const profileAlt = 'My frofile picture'


// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', profileImage);
document.querySelector('img').setAttribute('alt', profileAlt);




/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let myFood = ['Cheese', 'Apples', 'Pears', 'Steak' ];

let allFood = ''

for (let foodItem of myFood) {
    allFood += `<span id="food-item">${foodItem},</span>`
}

console.log(allFood)

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = allFood

// Step 3: declare and instantiate a variable to hold another favorite food
const addFood = 'Chicken';


// Step 4: add the variable holding another favorite food to the favorite food array
addFood.push('addFood')

// Step 5: repeat Step 2
document.querySelector('#food').textContent = myFood;


// Step 6: remove the first element in the favorite foods array
myFood.shift('cheese');


// Step 7: repeat Step 2
document.querySelector('#food').textContent = myFood;


// Step 8: remove the last element in the favorite foods array
myFood.pop('chicken');


// Step 7: repeat Step 2
document.querySelector('#food').textContent = myFood;



