import runGame from '../index.js'
import getRandomNum from '../getRandomNum.js'

const description = 'Find the greatest common divisor of given numbers.'
const countRounds = 3
const startRange = 1
const endRange = 50
const findGcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return num1
}

const gcd = () => {
  const rounds = []

  for (let i = 0; i < countRounds; i += 1) {
    const num1 = getRandomNum(startRange, endRange)
    const num2 = getRandomNum(startRange, endRange)
    const question = `${num1} ${num2}`
    const correctAnswer = String(findGcd(num1, num2))

    rounds.push([question, correctAnswer])
  }
  runGame(description, rounds)
}

export default gcd
