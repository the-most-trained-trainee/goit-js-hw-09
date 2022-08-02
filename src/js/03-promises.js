import Notiflix from 'notiflix';

const createPromisesForm = document.querySelector(".form");

console.log(createPromisesForm);

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
  for (let i = 0; i < formOutPut.amount; i++) {
    createPromise(i + 1, Number(formOutPut.delay) + Number(formOutPut.step) * i);
  }
  event.currentTarget.reset();
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject(Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
  promise
    .then(result => console.log(result))
    .catch(result => console.log(result))
}