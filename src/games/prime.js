import runGame from '../index.js'
import getRandomNum from '../getRandomNum.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const countRounds = 3
const startRange = 0
const endRange = 200
const isPrime = (num) => {
  if (num < 2) return false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

const prime = () => {
  const rounds = []

  for (let i = 0; i < countRounds; i += 1) {
    const question = getRandomNum(startRange, endRange)
    const correctAnswer = isPrime(question) ? 'yes' : 'no'
    rounds.push([String(question), correctAnswer])
  }
  runGame(description, rounds)
}

export default prime
