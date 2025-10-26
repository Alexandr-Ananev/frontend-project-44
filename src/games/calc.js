import readlineSync from 'readline-sync'
import greetUser from '../cli.js'
import getRandomNum from '../getRandomNum.js'

const calc = () => {
  const name = greetUser()
  console.log('What is the result of the expression?')

  const actions = ['+', '-', '*']
  const startRange = 0
  const endRange = 200
  let correctAnswers = 0
  const countRounds = 3

  while (correctAnswers < countRounds) {
    const action = actions[Math.floor(Math.random() * actions.length)]
    const num1 = getRandomNum(startRange, endRange)
    const num2 = getRandomNum(startRange, endRange)

    console.log(`Question: ${num1} ${action} ${num2}`)

    let result

    switch (action) {
      case '+':
        result = num1 + num2
        break
      case '-':
        result = num1 - num2
        break
      case '*':
        result = num1 * num2
        break
    }
    const answer = readlineSync.question('Your answer: ')

    if (result === +answer) {
      console.log('Correct!')
      correctAnswers += 1
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default calc
