const aboutQuality = document.querySelector(".about-quality");
const aboutSoftware = document.querySelector(".about-software");
const btnQuality = document.querySelector(".first-btn");
const btSoftware = document.querySelector(".second-btn");

btnQuality.addEventListener('click',()=>{
    aboutQuality.classList.remove('d-none');
    aboutSoftware.classList.add('d-none');


})

btSoftware.addEventListener('click',()=>{
    aboutSoftware.classList.remove('d-none');
    aboutQuality.classList.add('d-none');


})

