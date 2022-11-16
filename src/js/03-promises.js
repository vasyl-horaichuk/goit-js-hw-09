import { Notify } from "notiflix";

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) { 
  e.preventDefault();

  let delay = e.currentTarget.delay.value;
  const step = e.currentTarget.step.value;
  const amount = e.currentTarget.amount.value;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
         }, delay)
    
  })
      
      .catch(({ position, delay }) => {
        setTimeout(() => { 
          Notify.success(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay)
      });
    delay += step;
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promiseValue = {position, delay};

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(promiseValue);
    }
      reject(promiseValue);
  })
}


