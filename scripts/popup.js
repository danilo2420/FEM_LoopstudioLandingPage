import { animate, createTimer, waapi } from "animejs";

const popupElement = document.querySelector('.popup');
const popupDim = document.querySelector('.popup__dim');
const popupContainer = document.querySelector('.popup__container');
const popupTitle = document.querySelector('.popup__title');
const popupContent = document.querySelector('.popup__content');
const popupBtn = document.querySelector('.popup__btn');

export class popup {
    static openPopup(title, content, btnCallback) {
        popupTitle.innerHTML = title;
        popupContent.innerHTML = content;
        popupBtn.onclick = btnCallback;

        popupElement.style.display = "flex";

        animate(popupElement, {
            opacity: [0, 1],
            duration: 500
        });
        waapi.animate(popupContainer, {
            transform: ['translate(-50%, 0%)', 'translate(-50%, -50%)'],
            duration: 500
        })
    }
    static closePopup() {
        const timer = createTimer({
            duration: 500,
            onBegin: () => {
                animate(popupElement, {
                    opacity: [1, 0],
                    duration: 500
                });
                waapi.animate(popupContainer, {
                    transform: ['translate(-50%, -50%)', 'translate(-50%, -100%)'],
                    duration: 500
                })
            },
            onComplete: () => {
                popupElement.style.display = "none";
            }
        });
    }
}

popupDim.onclick = popup.closePopup;