import runGame from '../index.js'
import getRandomNum from '../getRandomNum.js'

const description = 'What number is missing in the progression?'
const countRounds = 3
const countNums = 10
const minStep = 1
const maxStep = 5
const startRange = 0
const endRange = 100
const makeProgression = (firstNum, step, countNums) => {
  const currentProgression = []
  for (let i = 0; i < countNums; i++) {
    const currentNum = firstNum + step * i
    currentProgression.push(currentNum)
  }
  return currentProgression
}

const progression = () => {
  const rounds = []
  for (let i = 0; i < countRounds; i += 1) {
    let currentProgression = null
    const firstNum = getRandomNum(startRange, endRange)
    const step = getRandomNum(minStep, maxStep)

    currentProgression = makeProgression(firstNum, step, countNums)
    const missedIndex = getRandomNum(0, countNums - 1)
    const correctAnswer = String(currentProgression[missedIndex])

    currentProgression[missedIndex] = '..'

    const question = currentProgression.join(' ')
    rounds.push([question, correctAnswer])
  }
  runGame(description, rounds)
}

export default progression
