import Notiflix from 'notiflix';

const formData = document.querySelector(".form");

formData.addEventListener("input", inputDate);
formData.addEventListener("submit", submitForm);

const inputValueData = {}

function inputDate (evt) {
 inputValueData[evt.target.name] = evt.target.value;
}

function submitForm (evt) {
    
    evt.preventDefault();
    evt.currentTarget.reset()
    let delay = Number(inputValueData.delay);
    const step = Number(inputValueData.step);
    const position = Number(inputValueData.amount);
    
    for (let i = 1; i <= position; i += 1) {

        createPromise(i, delay)
        .then(({ i, delayScore }) => {
            console.log(`✅ Fulfilled promise ${i} in ${delayScore}ms`);
            Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delayScore}ms`);
        })
        .catch(({ i, delayScore }) => {
            console.log(`❌ Rejected promise ${i} in ${delayScore}ms`);
            Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delayScore}ms`);
        });

        delay += step;
    }
};

function createPromise(i, delayScore) {

    return new Promise((res, rej) => { 
        setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          res({i, delayScore});
        } else {
          rej({i, delayScore});
        }    
        }, delayScore);
    });
}

