const icon_bar = document.querySelector('.icon_bar');
const icon_x = document.querySelector('.icon_x');
const disguise = document.querySelector('.disguise');
const nav = document.querySelector('.container_nav');

icon_bar.addEventListener('click', function(event) {
    nav.classList.remove('disguise');
});

icon_x.addEventListener('click', function(event) {
    nav.classList.add('disguise');
});