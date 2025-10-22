
const popupElement = document.querySelector('.popup');
const popupDim = document.querySelector('.popup__dim');
const popupTitle = document.querySelector('.popup__title');
const popupContent = document.querySelector('.popup__content');
const popupBtn = document.querySelector('.popup__btn');

export class popup {
    static openPopup(title, content, btnCallback) {
        popupElement.style.display = "flex";
        
        popupTitle.innerHTML = title;
        popupContent.innerHTML = content;
        popupBtn.onclick = btnCallback;
    }
    static closePopup() {
        popupElement.style.display = "none";
    }
}

popupDim.onclick = popup.closePopup;