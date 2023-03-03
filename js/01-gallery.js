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

gallery.addEventListener("click", onClick);

const instance = basicLightbox.create(
  `
  <div class="modal">
    <img class="modal-img" src="">
  </div>
`,
  {
    onShow: (instance) => {
      window.addEventListener(
        "keydown",
        onEscClick
      );
    },
    onClose: (instance) => {
      window.removeEventListener(
        "keydown",
        onEscClick
      );
    },
  }
);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "IMG") {
    return;
  }
  instance.show(
    () =>
      (document.querySelector(".modal-img").src =
        evt.target.dataset.source)
  );
}

function onEscClick(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}
console.log(galleryItems);
