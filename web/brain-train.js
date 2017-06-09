var displayContainer = document.getElementById('displayContainer')
var display1 = document.getElementById('display1')
var display2 = document.getElementById('display2')
var display3 = document.getElementById('display3')
var display4 = document.getElementById('display4')
var inputContainer = document.getElementById('inputContainer')
var btnBlue = document.getElementById('btnBlue')
var btnGreen = document.getElementById('btnGreen')
var btnYellow = document.getElementById('btnYellow')
var btnRed = document.getElementById('btnRed')
var resultContainer = document.getElementById('resultContainer')
var results = document.getElementById('results')
var resetBtn = document.getElementById('resetBtn')
var scoreTally = document.getElementById('scoreTally')

var displays = [display1, display2, display3, display4]
var comboToCopy = ['', '','', '']
var comboAnswer = ['', '','', '']
var counter = 0;
var score = 0;

initialize()

btnBlue.onclick = function() { submitAnswer('blue') }
btnGreen.onclick = function() { submitAnswer('green') }
btnYellow.onclick = function() { submitAnswer('yellow') }
btnRed.onclick = function() { submitAnswer('red') }

resetBtn.onclick = function() { initialize() }


// ----- Setup ------------

function initialize() {
    hideColors()
    comboToCopy = getNewCombo()
    resultContainer.style.display = 'none'
    inputContainer.style.display = 'none'
    displayColor(comboToCopy[0], display1)
    setTimeout('displayColor(comboToCopy[1], display2)', 500)
    setTimeout('displayColor(comboToCopy[2], display3)', 1000)
    setTimeout('displayColor(comboToCopy[3], display4)', 1500)
    setTimeout('inputContainer.style.display = "block"', 3000)
    setTimeout(hideColors, 3000)
}

function getNewCombo() {
    var newCombo = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()]
    console.log("Guess: " + newCombo)
    return newCombo
}

function getRandomColor() {
    rand = Math.floor(Math.random() * (5 - 1)) + 1;
    switch (rand) {
        case 1:
            return 'blue'
            break
        case 2:
            return 'green'
            break
        case 3:
            return 'yellow'
            break
        default:
            return 'red'
    }
}


// ---------- Gameplay ----------------

function submitAnswer(color) { 
    // check counter & insert correct color in index matching counter
    comboAnswer[counter] = color
    displayColor(color, displays[counter])
    ++counter

    // launch wrap-up, validation if counter hits full
    if (counter == 4) {
        counter = 0

        if (isSameCombo()) {
            results.innerHTML = "Good job!"
            ++score
        } else {
            results.innerHTML = "Try again"
        }

        scoreTally.innerHTML = "Score: " + score
        inputContainer.style.display = "none"
        resultContainer.style.display = "block"
    }   
}


// -------- Utilities -------------

function displayColor(color, colorDisplay) {
    colorDisplay.style.backgroundColor = color
}

function hideColors() {
    displayColor('grey', display1)
    displayColor('grey', display2)
    displayColor('grey', display3)
    displayColor('grey', display4)
}

function isSameCombo() {
    if (comboToCopy[0] != comboAnswer[0]) {
        return false
    } else if (comboToCopy[1] != comboAnswer[1]) {
        return false
    } else if (comboToCopy[2] != comboAnswer[2]) {
        return false
    } else {
        return comboToCopy[3] == comboAnswer[3]
    }
}