import java.util.Random
import java.util.Scanner

fun main(args: Array<String>) {

    val comboToCopy = newCombo()
    println("The colors are ${comboToCopy.print()}.")

    val answerCombo = submitAnswer()
    println("You answered ${answerCombo.print()}")

    if (isSameCombo(comboToCopy, answerCombo)) println("You matched it!") else println("You didn't match it.")

}

class Combination(val num1: Int, val num2: Int, val num3: Int, val num4: Int) {

    fun print(): String {
        return "${numToColor(num1)}, ${numToColor(num2)}, " +
                "${numToColor(num3)}, and ${numToColor(num4)}"
    }

    fun numToColor(num: Int): String {
        when (num) {
            0 -> return "blue"
            1 -> return "yellow"
            2 -> return "red"
            else -> return "green"
        }
    }

}

fun newCombo(): Combination {
    val random = Random()
    val newCombo = Combination(random.nextInt(4), random.nextInt(4), random.nextInt(4), random.nextInt(4))
    return newCombo
}

fun inputColor(): Int {
    val input = Scanner(System.`in`)
    val colorRegex = Regex("blue|yellow|green|red")

    while (true) {
        print("Type: ")
        val color = input.next()
        if (!colorRegex.matches(color)) {
            continue
        } else when (color) {
            "blue" -> return 0
            "yellow" -> return 1
            "red" -> return 2
            "green" -> return 3
        }
    }
}

fun submitAnswer(): Combination {
    println("What is your first color?")
    val answer1 = inputColor()
    println("What is your second color?")
    val answer2 = inputColor()
    println("What is your third color?")
    val answer3 = inputColor()
    println("What is your fourth color?")
    val answer4 = inputColor()
    val answerCombo = Combination(answer1, answer2, answer3, answer4)
    return answerCombo
}

fun isSameCombo(combo1: Combination, combo2: Combination): Boolean {
    if (combo1.num1 != combo2.num1) {
        return false
    } else if (combo1.num2 != combo2.num2) {
        return false
    } else if (combo1.num3 != combo2.num3) {
        return false
    } else return combo1.num4 == combo2.num4
}