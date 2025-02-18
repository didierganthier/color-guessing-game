const colorBox = document.querySelector(".color-box");
const colorCode = document.querySelector("#colorCode");
const options = document.querySelectorAll(".color-option");
const message = document.getElementById("message");

let correctColor;

const randomColor = () => {
    let r = Math.floor(Math.random() * 256); // 0 - 255
    let g = Math.floor(Math.random() * 256); // 0 - 255
    let b = Math.floor(Math.random() * 256); // 0 - 255
    return `rgb(${r}, ${g}, ${b})`;
}

const startGame = () => {
    correctColor = randomColor();
    colorCode.innerText = correctColor;
    colorBox.style.backgroundColor = correctColor;

    // Generate incorret options
    let randomColors = [correctColor, randomColor(), randomColor()];
    randomColors.sort(() => Math.random() - 0.5);

    options.forEach((button, index) => {
        button.innerText = randomColors[index];
        button.style.backgroundColor = randomColors[index];
        button.onclick = () => checkAnswer(randomColors[index]);
    })

    message.innerText = "";
}

const checkAnswer = (color) => {
    if (color === correctColor) {
        message.innerText = "Correct!";
        setTimeout(() => {
            startGame();
        }, 2000);
    } else {
        message.innerText = "Try Again!";
    }
}

startGame();