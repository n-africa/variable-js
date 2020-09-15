const numberOfCupsOfCoffee = 1
const fullName = 'Naima Africa Francis'

console.log(numberOfCupsOfCoffee, fullName)

const userName = window.prompt(`What is your name?`)

const helloMessage = `Hello, ${userName}. I hope you are having a good day.`

console.log(helloMessage)

const firstOperand = parseFloat(window.prompt(`Pick a number 1 to 1000.`))
const secondOperand = parseFloat(
  window.prompt(`Pick a second number from 1 to 100.`)
)

const sum = firstOperand + secondOperand

const difference = firstOperand - secondOperand

const product = firstOperand * secondOperand

const quotient = firstOperand / secondOperand

const remainder = firstOperand % secondOperand

console.log(`${firstOperand} + ${secondOperand} = ${sum}`)
console.log(`${firstOperand} - ${secondOperand} = ${difference}`)
console.log(`${firstOperand} * ${secondOperand} = ${product}`)
console.log(`${firstOperand} / ${secondOperand} = ${quotient}`)
console.log(
  `The remainder of ${firstOperand} / ${secondOperand} is ${remainder}`
)

const numbers = [
  27,
  91,
  58,
  49,
  31,
  5,
  84,
  1,
  71,
  50,
  79,
  40,
  84,
  36,
  85,
  69,
  47,
  4,
  92,
  91,
]
console.log(numbers)

const smallest = Math.min(...numbers)
console.log(smallest)

const largest = Math.max(...numbers)
console.log(largest)

let average = 0

for (let index = 0; index < numbers.length; index++) {
  let numberBeforeDivided = numbers[index]
  average = numberBeforeDivided / numbers.length
}

console.log(average)

let secondSum = 0

for (let index = 0; index < numbers.length; index++) {
  let totalOfAllNumbers = numbers[index]
  secondSum = secondSum + totalOfAllNumbers
}

console.log(secondSum)
