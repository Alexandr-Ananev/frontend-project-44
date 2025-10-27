import runGame from '../index.js'
import getRandomNum from '../getRandomNum.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'
const countRounds = 3
const startRange = 0
const endRange = 100
const isEven = number => number % 2 === 0

const even = () => {
  const rounds = []

  for (let i = 0; i < countRounds; i += 1) {
    const number = getRandomNum(startRange, endRange)
    const question = `${number}`
    const correctAnswer = isEven(number) ? 'yes' : 'no'
    rounds.push([question, correctAnswer])
  }
  runGame(description, rounds)
}

export default even
