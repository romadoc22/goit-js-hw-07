import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery =
  document.querySelector(".gallery");

gallery.innerHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
  })
  .join(" ");

const lightbox = new imageLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

console.log(galleryItems);
