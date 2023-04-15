import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

for (const image of galleryItems) {
  const imgEl = `<li class="gallery__item">
  <a class="gallery__link" href=${image.original}>
    <img
      class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
</li>`;
  galleryEl.insertAdjacentHTML('beforeend', imgEl);
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  scrollbarWidth: 20,
});
