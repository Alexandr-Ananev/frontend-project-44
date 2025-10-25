import readlineSync from 'readline-sync'
import greetUser from '../cli.js'

const calc = () => {
  const name = greetUser()
  console.log('What is the result of the expression?')

  const actions = ['+', '-', '*']
  const range = 200
  let correctAnswers = 0
  const countRounds = 3
  const randomNum = () => Math.floor(Math.random() * (range + 1))

  while (correctAnswers < countRounds) {
    const action = actions[Math.floor(Math.random() * actions.length)]
    const num1 = randomNum()
    const num2 = randomNum()

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
