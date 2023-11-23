import { initialCards } from './cards'
import { cardsContainer } from './constants'
import { openModal, closeModal } from './modal'

const popupImageCaption = document.querySelector('.popup__caption');
const cardTemplate = document.querySelector('#card-template');

export function openImagePopup(name, link) {
  const popupImage = document.querySelector('.popup_type_image');
  const popupImageElement = popupImage.querySelector('.popup__image');

  popupImageElement.src = link;
  popupImageElement.setAttribute('alt', name);
  popupImageCaption.textContent = name;

  openModal(popupImage);
}


export function createCard(name, link, likeProc, deleteProc, openImagePopup) {
  const card = cardTemplate.content.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const likeButton = card.querySelector('.card__like-button');
  const deleteButton = card.querySelector('.card__delete-button');

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  likeButton.addEventListener('click', function () {
    likeProc(likeButton);
  });

  deleteButton.addEventListener('click', function () {
    deleteProc(card);
  });

  cardImage.addEventListener('click', function () {
    openImagePopup(name, link);
  });

  return card;
};

export function renderCards(cards) {
  cards.forEach((card) => {
    const newCard = createCard(card.name, card.link, toggleLike, deleteCard, openImagePopup);
    cardsContainer.appendChild(newCard);
  });
};

export function deleteCard(card) {
  card.remove();
};

export function toggleLike(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active')
};



renderCards(initialCards);