const popupEdit = document.querySelector('.popup_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const nameOutput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.popup__input_type_description');
const jobOutput = document.querySelector('.profile__description');
const formEdit = document.getElementById("edit-profile");
const popupAdd = document.querySelector('.popup_type_new-card');
const formAdd = document.getElementById('new-place');
const cardsContainer = document.querySelector('.places__list');
const cards = document.querySelectorAll('.card');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupImage = document.querySelector('.popup_type_image');
const closeButtonPopupEdit = popupEdit.querySelector('.popup__close');
const closeButtonPopupAdd = popupAdd.querySelector('.popup__close');
const closeButtonPopupImage = popupImage.querySelector('.popup__close');


export { popupEdit, nameInput, nameOutput, jobInput, jobOutput, formEdit, popupAdd, formAdd, cardsContainer, cards, editButton, addButton, popupImage, closeButtonPopupEdit, closeButtonPopupAdd, closeButtonPopupImage}
