import readlineSync from 'readline-sync'
import greetUser from '../cli.js'
import getRandomNum from '../getRandomNum.js'

const prime = () => {
  const name = greetUser()

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  const isPrime = (num) => {
    if (num < 2) return false

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }
  const startRange = 0
  const endRange = 200
  const countRounds = 3

  let rounds = 0
  while (rounds < countRounds) {
    const question = getRandomNum(startRange, endRange)
    const correctAnswer = isPrime(question) ? 'yes' : 'no'

    console.log(`Question: ${question}`)

    const answer = readlineSync.question('Your answer: ')

    if (answer.toLowerCase() === correctAnswer) {
      console.log('Correct!')
      rounds += 1
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default prime
