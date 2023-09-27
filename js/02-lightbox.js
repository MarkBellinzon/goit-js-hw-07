import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryCardsSet = createElement(galleryItems);

function createElement(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
        return `<div 
      class="gallery__item"
      style="border-radius: 4px;
      background: transparent;
      box-shadow: none;">
      
  <a class="gallery__item"
  href="${original}" 
  style= "box-shadow: none;"
  style="border-radius: 4px;">

  <img class="gallery__image"
  src="${preview}" 
  alt="${description}" 
  style="border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px; 
  background: rgba(255, 255, 255, 0.3); 
  box-shadow: 0px 1px 3px 5px rgb(0 0 0 1), 0px 1px 1px 5px rgb(0 0 0 1), 0px 2px 2px 1px rgb(0 0 0 1);"/>
</a>
</div>`;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryCardsSet);



const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});