/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = "Erick Patino";

// Step 2: Inside of the object, add a property named name with a value of your name as a string
let name = "Erick Patino";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
let photo =  src="images/erick.jpg";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
let favoriteFoods =["Steack", "Pasta", "Rice", "Chicken"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
let hobbies = ["Soccer", "Pickleball", "Snowboarding", "Cooking"];
// Step 6: Add another property named placesLived with a value of an empty array
let placeLived = []
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
placeLived = [
     
    { 
      place: 'Lima, Peru',
      length: '22 years',
    },
    { 
        place: 'Buenos Aires, Argentina',
        length: '2 years',
    },
    { 
        place: 'Riverton, Utah',
        length: '4 years',
    }, 
 
    { 
        place: 'Lehi, Utah',
        length: '1 year',
      },
]
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myInfo;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', myInfo);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
favoriteFoods.forEach((food) => {
    let foodLi = document.createElement('li');
    foodLi.textContent = food;

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

document.querySelector('#favorite-foods').appendChild(foodLi);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
hobbies.forEach((hobby) => {
    let hobbyLi = document.createElement('li');
    hobbyLi.textContent = hobby;
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.querySelector('#hobbies').appendChild(hobbyLi);
});
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

placeLived.forEach((placeLived) => {
    let placesLivedName = document.createElement('dt');
    placesLivedName.textContent = placeLived.place;
    
    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.querySelector('#places-lived').appendChild(placesLivedName);
document.querySelector('#places-lived').appendChild(placesLivedLength);
})