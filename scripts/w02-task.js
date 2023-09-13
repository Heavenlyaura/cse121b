/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Goodness Arinze Okafor';
let currentYear = 2023;
let ProfilePicture = "../images/Photo-of-me.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const yearElement = document.querySelector("#year")
const foodElement = document.getElementById('food')
const imageElement = document.getElementById("my-photo")



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', ProfilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */



let favouriteFoods = ['rice', ' bread', ' noddles', ' yam'];
let favouriteFood = ' beans';

favouriteFoods.push(favouriteFood);

foodElement.innerHTML += `<br>${favouriteFoods}`;

favouriteFoods.splice(0,1);

foodElement.innerHTML += `<br>${favouriteFoods}`;








