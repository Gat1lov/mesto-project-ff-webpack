import '../src/styles/index.css';
import { createCard, renderCards, toggleLike, deleteCard, openImagePopup } from '../src/components/card'
import { openModal, closeModal } from '../src/components/modal';
import { popupEdit, nameInput, nameOutput, jobInput, jobOutput, formEdit, popupAdd, formAdd, cardsContainer, cards } from './components/constants';

function popupEditSubmit(event) {

  event.preventDefault();

  nameOutput.textContent = nameInput.value;
  jobOutput.textContent = jobInput.value;

  closeModal(popupEdit);
}

formEdit.addEventListener('submit', popupEditSubmit);

function addCardFromForm(event) {
  event.preventDefault();

  const placeName = formAdd.querySelector('.popup__input_type_card-name').value;
  const imageUrl = formAdd.querySelector('.popup__input_type_url').value;

  const newCard = createCard(placeName, imageUrl, toggleLike, deleteCard, openImagePopup);

  cardsContainer.insertBefore(newCard, cardsContainer.firstChild);

  formAdd.reset();

  closeModal(popupAdd);
}

formAdd.addEventListener('submit', addCardFromForm);

const popupImage = document.querySelector('.popup_type_image');
const popupImageElement = popupImage.querySelector('.popup__image');
const popupImageCloseButton = popupImage.querySelector('.popup__close');
const popupImageCaption = popupImage.querySelector('.popup__caption');

popupImageCloseButton.addEventListener('click', function () {
  closeModal(popupImage);
  popupImageElement.setAttribute('src', '');
  popupImageElement.setAttribute('alt', '');
  popupImageCaption.textContent = '';
});