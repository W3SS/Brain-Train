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


var comboToCopy = ['', '','', '']
var comboAnswer = ['', '','', '']
var counter = 0;

initialize()
// submitAnswer()

//     val answerCombo = submitAnswer()
//     println("You answered ${answerCombo.print()}")

//     if (isSameCombo(comboToCopy, answerCombo)) println("You matched it!") else println("You didn't match it.")
// console.log(isSameCombo(comboToCopy, comboAnswer))

function initialize() {
    comboToCopy = getNewCombo()
    inputContainer.style.display = 'none'
    displayColor(comboToCopy[0], display1)
    setTimeout('displayColor(comboToCopy[1], display2)', 500)
    setTimeout('displayColor(comboToCopy[2], display3)', 1000)
    setTimeout('displayColor(comboToCopy[3], display4)', 1500)
    setTimeout('inputContainer.style.display = "block"', 2000)
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

function displayColor(color, colorDisplay) {
    colorDisplay.style.backgroundColor = color
}

function hideColors() {
    displayColor('grey', display1)
    displayColor('grey', display2)
    displayColor('grey', display3)
    displayColor('grey', display4)
}

btnBlue.onclick = function() { btnClick('blue') }
btnGreen.onclick = function() { btnClick('green') }
btnYellow.onclick = function() { btnClick('yellow') }
btnRed.onclick = function() { btnClick('red') }

// TODO
function btnClick(color) { 
    // check counter
    // insert correct color in index matching counter
    // ++counter
    // launch wrap-up, validation if counter hits full
}

function inputColor(color, index) {
    comboAnswer[index] = color
    console.log("Set button " + (index + 1) + " to " + color)
}

// while (true) {
//         print("Type: ")
//         val color = input.next()
//         if (!colorRegex.matches(color)) {
//             continue
//         } else when (color) {
//             "blue" -> return 0
//             "yellow" -> return 1
//             "red" -> return 2
//             "green" -> return 3
//         }
//     }

function submitAnswer() {
    // switch (counter) {
    //     case 0:
    //         console.log("First")
    //         break
    //     case 1:
    //         comboAnswer[0] = btnClickListener()
    //         displayColor(comboAnswer[0], display1)
    //     default:
    //         console.log("oops")
    // }
    
    // console.log("Second")
    // comboAnswer[0] = btnClickListener()
    // console.log("Third")
    // comboAnswer[0] = btnClickListener()
    // console.log("Fourth")
    // comboAnswer[0] = btnClickListener()

    // ++counter
}

function isSameCombo(combo1, combo2) {
    if (combo1[0] != combo2[0]) {
        return false
    } else if (combo1[1] != combo2[1]) {
        return false
    } else if (combo1[2] != combo2[2]) {
        return false
    } else {
        return combo1[3] == combo2[3]
    }
}