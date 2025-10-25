import readlineSync from 'readline-sync'
import greetUser from '../cli.js'

const progression = () => {
  const name = greetUser()

  console.log('What number is missing in the progression?')

  const getRandomNumInRange = (startRange, endRange) => Math.floor(Math.random() * ((endRange - startRange) + 1)) + startRange

  const countNums = 10
  const maxRangeStep = 5
  const range = 100
  const countRounds = 3

  let rounds = 0
  while (rounds < countRounds) {
    const currentProgression = []
    const firstNum = getRandomNumInRange(0, range)
    const step = getRandomNumInRange(1, maxRangeStep)

    for (let i = 0; i < countNums; i++) {
      const currentNum = firstNum + step * i
      currentProgression.push(currentNum)
    }
    const missedIndex = getRandomNumInRange(0, countNums - 1)
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
