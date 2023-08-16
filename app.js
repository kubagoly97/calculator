const score = document.querySelector('#score');
const button1 = document.querySelector('#one');
const button2 = document.querySelector('#two');
const button3 = document.querySelector('#three');
const button4 = document.querySelector('#four');
const button5 = document.querySelector('#five');
const button6 = document.querySelector('#six');
const button7 = document.querySelector('#seven');
const button8 = document.querySelector('#eight');
const button9 = document.querySelector('#nine');
const button0 = document.querySelector('#zero');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const split = document.querySelector('#split');
const cButton = document.querySelector('#cButton');
const equals = document.querySelector('#equals');
const deleteB = document.querySelector('#deleteb');

let tapSound = new Audio('Tap.mp3');
let equalsSound = new Audio('Eqquals.mp3')

const buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];

const turnOnButtons = () => {
    plus.disabled = false;
    multiply.disabled = false;
    equals.disabled = false;
    minus.disabled = false;
    split.disabled = false;
    score.style.backgroundColor = 'rgb(210, 210, 210)';
    button0.disabled = false;
}

const turnOffButtons = () => {
    plus.disabled = true;
    multiply.disabled = true;
    equals.disabled = true;
    minus.disabled = true;
    split.disabled = true;
}

for (let button of buttons) {
    button.addEventListener('click', function () {
        tapSound.play();
        score.value += buttons.indexOf(button) + 1;
        turnOnButtons();
    })
}

const scoreColorDefault = () => {
    score.style.backgroundColor = 'rgb(210, 210, 210)'
}

button0.addEventListener('click', function () {
    if (score.value == 0) {
        false
    } else {
        score.value += 0;
        turnOnButtons();
        tapSound.play();
    }
})

cButton.addEventListener('click', function () {
    score.value = score.value.toString().slice(0, -1);
    turnOnButtons();
    scoreColorDefault();
    tapSound.play();
})

plus.addEventListener('click', function () {
    if (score.value === 0 || score.value === '') {
        plus.disabled = true;
    } else {
        score.value += '+';
        turnOffButtons();
        scoreColorDefault();
        tapSound.play();
    };
})

minus.addEventListener('click', function () {
    score.value += '-';
    turnOffButtons();
    scoreColorDefault();
    tapSound.play();
})

multiply.addEventListener('click', function () {
    if (score.value === 0 || score.value === '') {
        multiply.disabled = true;
    } else {
        score.value += '*';
        turnOffButtons();
        scoreColorDefault();
        tapSound.play();
    }
})

split.addEventListener('click', function () {
    if (score.value === 0 || score.value === '') {
        false
    } else {
        score.value += '/';
        turnOffButtons();
        button0.disabled = true;
        scoreColorDefault();
        tapSound.play();
    }
})

equals.addEventListener('click', function () {
    if (!score.value) {
        equals.disabled = true;
    } else {
        equalsSound.play();
        score.value = eval(score.value);
        score.style.backgroundColor = 'rgb(91, 157, 223)';
        console.log('EQUALS =', score.value);
    }
})

deleteB.addEventListener('click', function () {
    score.value = '';
    scoreColorDefault();
    tapSound.play();
})

calculator.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (!score.value) {
            equals.disabled = true;
        } else {
            equalsSound.play();
            score.value = eval(score.value);
            score.style.backgroundColor = 'rgb(91, 157, 223)';
            console.log('EQUALS =', score.value)
        }
    }
});
