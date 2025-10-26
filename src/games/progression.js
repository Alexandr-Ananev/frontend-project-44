import readlineSync from 'readline-sync'
import greetUser from '../cli.js'
import getRandomNum from '../getRandomNum.js'

const progression = () => {
  const name = greetUser()

  console.log('What number is missing in the progression?')

  const countNums = 10
  const minStep = 1
  const maxStep = 5
  const startRange = 0
  const endRange = 100
  const countRounds = 3

  let rounds = 0
  while (rounds < countRounds) {
    const currentProgression = []
    const firstNum = getRandomNum(startRange, endRange)
    const step = getRandomNum(minStep, maxStep)

    for (let i = 0; i < countNums; i++) {
      const currentNum = firstNum + step * i
      currentProgression.push(currentNum)
    }
    const missedIndex = getRandomNum(0, countNums - 1)
    const correctAnswer = currentProgression[missedIndex]

    currentProgression[missedIndex] = '..'

    const question = currentProgression.join(' ')

    console.log(`Question: ${question}`)

    const answer = +readlineSync.question('Your answer: ')

    if (answer === correctAnswer) {
      console.log('Correct!')
      rounds += 1
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default progression
