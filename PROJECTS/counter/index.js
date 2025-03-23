var count = document.querySelector('.value');
var add = document.querySelector('#add');
var sub = document.querySelector('#sub');

var countValue = 0;

add.addEventListener('click', () => {
    count.innerHTML = ++countValue;
});

sub.addEventListener('click', () => {
    count.innerHTML = --countValue;
});
