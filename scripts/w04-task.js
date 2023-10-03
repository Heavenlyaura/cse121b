/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
    name : 'Goodness Okafor',
    photo : 'images/photo-of-me.jpg',
    favFood : ['rice', 'garri', 'indomie', 'pawpaw', 'spaghetti', 'bread'],
    hobbies : ['basketball', 'video games', 'chess'],
    placesLived : []
}



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place : 'abuja',
    length : '18 years'
}, {
    place: 'niger',
    length : '3 years'
}, {
    place : 'port harcourt',
    length : '6 months'
}, {
    place : 'uyo',
    length : '1 year 3 months'
}, {
    place : 'calabar',
    length : '7 months'
}
)

console.log(myProfile)


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;  

/* Photo with attributes */
let imageElement = document.querySelector('#photo');
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', `Image of ${myProfile.name}`);

/* Favorite Foods List*/

myProfile.favFood.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li)
});
/* Places Lived DataList */

myProfile.placesLived.forEach(placeLived => {
    let place = document.createElement('dd');
    let length = document.createElement('dt');
    let lineBreak = document.createElement('br')
    place.innerHTML = `<strong>${placeLived.place}</strong>`
    length.textContent = placeLived.length;
    document.querySelector('#places-lived').appendChild(place)
    document.querySelector('#places-lived').appendChild(length)

});
