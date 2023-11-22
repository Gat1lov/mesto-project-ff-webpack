import {editButton, addButton, popupEdit, popupAdd, popupImage, closeButtonPopupEdit, closeButtonPopupAdd, closeButtonPopupImage, nameInput, nameOutput, jobInput, jobOutput} from './constants'

function closeByClick(event) {
    const modal = event.currentTarget;
    if (event.target === modal) {
        document.removeEventListener('keydown', closeByEsc);
        closeModal(modal);
    }
}


function closeByEsc(event) {
    if (event.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_is-opened');
        if (popupOpened) {
            closeModal(popupOpened);
        }
    }
}

export function openModal(modal) {
    document.addEventListener('keydown', closeByEsc);
    modal.classList.add('popup_is-opened');
}

export function closeModal(modal) {
    document.addEventListener('keydown', closeByEsc);
    modal.classList.remove('popup_is-opened');
}

function openPopupEdit() {
    nameInput.value = nameOutput.textContent;
    jobInput.value = jobOutput.textContent;
    openModal(popupEdit);
}

function openPopupAdd() {
    openModal(popupAdd);
}

function closePopupEdit() {
    closeModal(popupEdit);
}

function closePopupAdd() {
    closeModal(popupAdd);
}

function closePopupImage() {
    closeModal(popupImage);
}

editButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', openPopupAdd);
closeButtonPopupEdit.addEventListener('click', closePopupEdit);
closeButtonPopupAdd.addEventListener('click', closePopupAdd);
closeButtonPopupImage.addEventListener('click', closePopupImage);
popupEdit.addEventListener('click', closeByClick);
popupAdd.addEventListener('click', closeByClick);
popupImage.addEventListener('click', closeByClick);
