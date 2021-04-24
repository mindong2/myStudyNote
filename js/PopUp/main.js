const container = document.querySelector('section');
const popupBtn = document.querySelector(`.popupBtn`);
const modal = document.querySelector(`.modal`);
const cancel = document.querySelector(`.fa-times`);

const clickModal = () => {
    container.classList.add(`sticky`);
    popupBtn.classList.add(`remove`);
    modal.classList.add(`view`);
}

const clickCancel = () => {
    container.classList.remove(`sticky`);
    popupBtn.classList.remove(`remove`);
    modal.classList.remove(`view`);
}

popupBtn.addEventListener(`click`,clickModal);
cancel.addEventListener(`click`,clickCancel);