import getRandomNum from '../getRandomNum.js'
import runGame from '../index.js'

const description = 'What is the result of the expression?'
const operators = ['+', '-', '*']
const countRounds = 3
const startRange = 0
const endRange = 200
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
  }
}

const calc = () => {
  const rounds = []

  for (let i = 0; i < countRounds; i += 1) {
    const operator = operators[getRandomNum(0, operators.length - 1)]
    const num1 = getRandomNum(startRange, endRange)
    const num2 = getRandomNum(startRange, endRange)
    const question = `${num1} ${operator} ${num2}`
    const correctAnswer = String(calculate(num1, num2, operator))
    rounds.push([question, correctAnswer])
  }
  runGame(description, rounds)
}

export default calc
