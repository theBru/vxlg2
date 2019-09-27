// Coloured squares
let list = document.querySelectorAll('.color-square');
for (let i = 0; i < list.length; i++) {
    let color = list[i].getAttribute('data-color');
    list[i].style.backgroundColor = color;
    console.log(color);
}