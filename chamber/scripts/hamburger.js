const menubtn = document.querySelector('header button')
const menunav = document.querySelector("nav")

menubtn.addEventListener('click', () => {
    menunav.classList.toggle('open')
    // menubutton.classList.toggle("close");
})
