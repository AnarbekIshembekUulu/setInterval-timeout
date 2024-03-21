const circle = document.querySelector(".circle");

const randomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let idx = 0; idx < 6; idx++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const time = setTimeout(() => {
    circle.style.backgroundColor = "#d9ff00";
    setInterval(() => {
        circle.style.backgroundColor = randomColor();
    }, 1000);
}, 5000);

////////////////////
const rectangle = document.querySelector(".rectangle");

setTimeout(() => {
    rectangle.style.backgroundColor = "#4dff00";
    setInterval(() => {
        rectangle.style.backgroundColor = "#ff00ea";
    }, 500);
    setInterval(() => {
        rectangle.style.backgroundColor = "#4c00ff";
    }, 1000);
}, 5000);
