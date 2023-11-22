import { initialCards } from './cards'
import { cardsContainer } from './constants'
import { openModal, closeModal } from './modal'

const cardTemplate = document.querySelector('#card-template');

export function openImagePopup(card) {
  const popupImage = document.querySelector('.popup_type_image');
  const imageElement = card.querySelector('.card__image');
  const placeName = card.querySelector('.card__title').textContent;
  const imageUrl = imageElement.getAttribute('src');
  const popupImageElement = popupImage.querySelector('.popup__image');
  const popupImageCaption = popupImage.querySelector('.popup__caption');

  popupImageElement.src = imageUrl
  popupImageElement.setAttribute('alt', placeName);
  popupImageCaption.textContent = placeName;

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
    openImagePopup(card)
  })

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