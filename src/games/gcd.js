import readlineSync from 'readline-sync'
import greetUser from '../cli.js'
import getRandomNum from '../getRandomNum.js'

const gcd = () => {
  const name = greetUser()
  console.log('Find the greatest common divisor of given numbers.')

  const startRange = 0
  const endRange = 50
  const countRounds = 3
  let correctAnswers = 0

  function findGcd(num1, num2) {
    while (num2 !== 0) {
      const temp = num2
      num2 = num1 % num2
      num1 = temp
    }
    return num1
  }

  while (correctAnswers < countRounds) {
    const num1 = getRandomNum(startRange, endRange)
    const num2 = getRandomNum(startRange, endRange)
    const correctAnswer = findGcd(num1, num2)

    console.log(`Question: ${num1} ${num2}`)
    const answer = +readlineSync.question('Your answer: ')

    if (correctAnswer === answer) {
      console.log('Correct!')
      correctAnswers += 1
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default gcd
