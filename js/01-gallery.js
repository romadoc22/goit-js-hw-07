import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery =
  document.querySelector(".gallery");
const cardOfGallery = createCard(galleryItems);
gallery.insertAdjacentHTML(
  "beforeend",
  cardOfGallery
);

function createCard() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div div class="gallery__item" >
        <a class="gallery__link"
          href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join(" ");
}

gallery.addEventListener("click", onclick);

function onclick(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    
        <img width = "1400"  height = "1000" src = "${evt.target.dataset.source}"> 
    
`);
  instance.show();
}

document.addEventListener("keydown", onEscClick);

function onEscClick(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}

console.log(galleryItems);
