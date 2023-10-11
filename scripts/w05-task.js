/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templeElement = document.getElementById('temples');

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');

        h3.textContent = temple.templeName;
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        
        article.appendChild(h3);
        article.appendChild(img);

        templeElement.appendChild(article);
    });
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    let results = await response.json();
    
    results.forEach(temple => {
        templeList.push(temple)
    });

}

/* reset Function */

const reset = () => {
    document.getElementById('temples').innerHTML = "";
  }

/* sortBy Function */

const sortBy = (temples) => {

    reset()
    let filter = document.querySelector('#sortBy').value; 
  
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;

        case 'older':
            displayTemples(temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1)));
            break

        case 'all':
            displayTemples(temples)
            break;
    }       
    
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });
getTemples()




