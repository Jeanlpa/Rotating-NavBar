const open = document.querySelector('.open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');
const progress = document.querySelector(".progress-done")


open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))

setTimeout(function() {
    progress.style.width = progress.getAttribute('data-done') + "%";
    progress.style.opacity = 1;
}, 500);