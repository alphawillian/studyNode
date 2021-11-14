// console.log('hello word')
// console.log(Math)
// console.log(Date)

// console.log(__filename)
// console.log(__dirname)

// console.log(process)

// console.log(process.argv)

var playerAction = process.argv[process.argv.length -1]


var random = Math.random() * 3

if (random < 1) {
  var computerAction = 'rock'
} else if (random > 2 && random < 3) {
  var computerAction = 'scissor'
} else {
  var computerAction = 'paper'
}
console.log('玩家：', playerAction)
console.log('电脑：', computerAction)
if (computerAction === playerAction) {
  console.log('平局')
} else if (
  (computerAction === 'rock' && playerAction === 'paper') || 
  (computerAction === 'scissor' && playerAction === 'rock') ||
  (computerAction === 'paper' && playerAction === 'scissor')
) {
  console.log('玩家赢')
} else {
  console.log('玩家输')
}