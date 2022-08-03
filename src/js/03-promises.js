import Notiflix from 'notiflix';

const createPromisesForm = document.querySelector(".form");

createPromisesForm.addEventListener("submit", onSubmit);

let formOutPut = undefined;

function formDataReceipt() {
  const formData = new FormData(createPromisesForm);
  let formOutPut = {};
  formData.forEach((value, name) => {
    formOutPut[name] = value;
  });
  return formOutPut;
}

function onSubmit(event) {
  event.preventDefault();
  formOutPut = formDataReceipt(event);
  if (formOutPut.delay < 0 || formOutPut.step < 0 || formOutPut.amount < 1) {
    Notiflix.Notify.warning("Please, enter valid data only")
  } else {
    for (let i = 0; i < formOutPut.amount; i++) {
      createPromise(i + 1, Number(formOutPut.delay) + Number(formOutPut.step) * i);
    }
    event.currentTarget.reset();
  }
}

function createPromise(position, delay) {
  new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  }).then((result) => Notiflix.Notify.success(`Fulfilled promise ${result.position} in ${result.delay}ms`))
    .catch((error) => Notiflix.Notify.failure(`Rejected promise ${error.position} in ${error.delay}ms`));
}