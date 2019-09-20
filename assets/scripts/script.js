// Coloured squares
let list = document.querySelectorAll('.color-square');
for (let i = 0; i < list.length; i++) {
    console.log(list[i].getAttribute('data-color'));
    let color = list[i].getAttribute('data-color');
    list[i].style.backgroundColor = color;
}