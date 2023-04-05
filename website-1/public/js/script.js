const sunIcon = document.querySelector('#sun');
const moonIcon = document.querySelector('#moon');
const body = document.querySelector('body');
const navTest = document.querySelector('.nav-test');

const testFunc = (event='miron', marti) => {
    console.log(event);
    // console.log(event.target);
}



sunIcon.addEventListener('click', () => {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
    body.classList.remove('dark');
});

// moonIcon.addEventListener('click', (e, safak='miron', marti) => {
//     console.log(e)

//     sunIcon.classList.remove('hidden');
//     moonIcon.classList.add('hidden');
//     body.classList.add('dark');
//     console.log(safak);
// });

moonIcon.addEventListener('click', testFunc);
navTest.addEventListener('click', () => testFunc())
