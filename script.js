const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader') ;
// Unsplash API

// Photos array 
let photosArray = [];

const count = 30;

const apiKey = 'U18VhUgwWXhYkox2aaoK4pu9uAnP2DToK_4PHdyLAVc';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Helper func for setAttribute

function setAttributes(element,attributes){
  for (const key in attributes){
    element.setAttribute(key,attributes[key]);
  }
}


// Create Elements for links and to display foto 
function displayPhotos(){
  // Run for each for each foto
  
  photosArray.forEach(photo =>  {
    // <a> for linking to unsplash
    const item = document.createElement('a');
    // item.setAttribute('href',photo.links.html);
    // item.setAttribute('target','_blank');
    setAttributes(item,{
      href:photo.links.html,
      target : '_blank'

    });
    
    // <img> for displayinf photo
    const img = document.createElement('img');
    // img.setAttribute('src',photo.urls.regular);
    // img.setAttribute('alt',photo.alt_description);
    // img.setAttribute('title',photo.alt_description);
    setAttributes(img, {
      src : photo.urls.regular,
      alt :photo.alt_description ,
      title :photo.alt_description
    });
    //Put the <img> inside of the <a> and put those two into imageContainer
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
    
}

// Get photos from API
async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      displayPhotos();
    } catch (error) {
      // Catch Error Here
    }
  }
// Event listener for scroll. More photos will be loaded when needed

window.addEventListener('scroll',()=> {
  console.log('Scrolled');
});


// On load :

getPhotos();