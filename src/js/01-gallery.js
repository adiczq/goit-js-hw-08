import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

for (const image of galleryItems) {
  const imgEl = `<div class="gallery__item">
        <a class="gallery__link" href=${image.original}>
          <img
            class="gallery__image"
            src=${image.preview}
            data-source=${image.original}
            alt=${image.description}
          />
        </a>
      </div>`;
  galleryEl.insertAdjacentHTML('beforeend', imgEl);
}

const func = e => {
  e.preventDefault();

  const instance = basicLightbox.create(`<img src=${e.target.dataset.source}>`);
  instance.show();

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
};

galleryEl.addEventListener('click', func);
