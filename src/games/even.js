import readlineSync from 'readline-sync'
import greetUser from '../cli.js'
import getRandomNum from '../getRandomNum.js'

const isEven = number => number % 2 === 0

const evenGame = () => {
  const name = greetUser()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswers = 0
  const countRounds = 3
  const startRange = 0
  const endRange = 100

  while (correctAnswers < countRounds) {
    const number = getRandomNum(startRange, endRange)
    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ')

    const correctAnswer = isEven(number) ? 'yes' : 'no'

    if (answer === correctAnswer) {
      console.log('Correct!')
      correctAnswers += 1
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default evenGame
