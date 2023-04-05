const box1h = document.querySelector('#box1-header');
const box1c = document.querySelector('#box1-content');
const box1b = document.querySelector('#box1-button');

const box2h = document.querySelector('#box2-header');
const box2c = document.querySelector('#box2-content');
const box2b = document.querySelector('#box2-button');

const box3h = document.querySelector('#box3-header');
const box3c = document.querySelector('#box3-content');
const box3b = document.querySelector('#box3-button');

const box4h = document.querySelector('#box4-header');
const box4c = document.querySelector('#box4-content');
const box4b = document.querySelector('#box4-button');

const box5h = document.querySelector('#box5-header');
const box5c = document.querySelector('#box5-content');
const box5b = document.querySelector('#box5-button');


function safak1() {
    box1c.classList.toggle('h-0');

    box2c.classList.add('h-0');
    box3c.classList.add('h-0');
    box4c.classList.add('h-0');
    box5c.classList.add('h-0');
    
    box1b.classList.toggle('fa-long-arrow-up')
    box1b.classList.toggle('fa-long-arrow-down')

    box2b.classList.add('fa-long-arrow-up')
    box2b.classList.remove('fa-long-arrow-down')
    box3b.classList.add('fa-long-arrow-up')
    box3b.classList.remove('fa-long-arrow-down')
    box4b.classList.add('fa-long-arrow-up')
    box4b.classList.remove('fa-long-arrow-down')
    box5b.classList.add('fa-long-arrow-up')
    box5b.classList.remove('fa-long-arrow-down')
}
function safak2() {
    box2c.classList.toggle('h-0');

    box1c.classList.add('h-0');
    box3c.classList.add('h-0');
    box4c.classList.add('h-0');
    box5c.classList.add('h-0');
    
    box2b.classList.toggle('fa-long-arrow-up')
    box2b.classList.toggle('fa-long-arrow-down')

    box1b.classList.add('fa-long-arrow-up')
    box1b.classList.remove('fa-long-arrow-down')
    box3b.classList.add('fa-long-arrow-up')
    box3b.classList.remove('fa-long-arrow-down')
    box4b.classList.add('fa-long-arrow-up')
    box4b.classList.remove('fa-long-arrow-down')
    box5b.classList.add('fa-long-arrow-up')
    box5b.classList.remove('fa-long-arrow-down')
}
function safak3() {
    box3c.classList.toggle('h-0');

    box1c.classList.add('h-0');
    box2c.classList.add('h-0');
    box4c.classList.add('h-0');
    box5c.classList.add('h-0');
    
    box3b.classList.toggle('fa-long-arrow-up')
    box3b.classList.toggle('fa-long-arrow-down')

    box1b.classList.add('fa-long-arrow-up')
    box1b.classList.remove('fa-long-arrow-down')
    box2b.classList.add('fa-long-arrow-up')
    box2b.classList.remove('fa-long-arrow-down')
    box4b.classList.add('fa-long-arrow-up')
    box4b.classList.remove('fa-long-arrow-down')
    box5b.classList.add('fa-long-arrow-up')
    box5b.classList.remove('fa-long-arrow-down')
}
function safak4() {
    box4c.classList.toggle('h-0');

    box1c.classList.add('h-0');
    box2c.classList.add('h-0');
    box3c.classList.add('h-0');
    box5c.classList.add('h-0');
    
    box4b.classList.toggle('fa-long-arrow-up')
    box4b.classList.toggle('fa-long-arrow-down')

    box1b.classList.add('fa-long-arrow-up')
    box1b.classList.remove('fa-long-arrow-down')
    box2b.classList.add('fa-long-arrow-up')
    box2b.classList.remove('fa-long-arrow-down')
    box3b.classList.add('fa-long-arrow-up')
    box3b.classList.remove('fa-long-arrow-down')
    box5b.classList.add('fa-long-arrow-up')
    box5b.classList.remove('fa-long-arrow-down')
}
function safak5() {
    box5c.classList.toggle('h-0');

    box1c.classList.add('h-0');
    box2c.classList.add('h-0');
    box3c.classList.add('h-0');
    box4c.classList.add('h-0');
    
    box5b.classList.toggle('fa-long-arrow-up')
    box5b.classList.toggle('fa-long-arrow-down')

    box1b.classList.add('fa-long-arrow-up')
    box1b.classList.remove('fa-long-arrow-down')
    box2b.classList.add('fa-long-arrow-up')
    box2b.classList.remove('fa-long-arrow-down')
    box3b.classList.add('fa-long-arrow-up')
    box3b.classList.remove('fa-long-arrow-down')
    box4b.classList.add('fa-long-arrow-up')
    box4b.classList.remove('fa-long-arrow-down')
}

box1h.addEventListener('click', safak1)
box2h.addEventListener('click', safak2)
box3h.addEventListener('click', safak3)
box4h.addEventListener('click', safak4)
box5h.addEventListener('click', safak5)