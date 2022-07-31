createPromisesForm = document.querySelector(".form");

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
    createPromise(formOutPut.delay, formOutPut.step);
  }
  event.currentTarget.reset();
}

function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;


  const promise = new Promise();



  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


// 43 17 