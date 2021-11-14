module.exports = function (playerAction) {
  // var playerAction = process.argv[process.argv.length -1]

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
    return 0
  } else if (
    (computerAction === 'rock' && playerAction === 'paper') || 
    (computerAction === 'scissor' && playerAction === 'rock') ||
    (computerAction === 'paper' && playerAction === 'scissor')
  ) {
    console.log('玩家赢')
    return -1
  } else {
    console.log('玩家输')
    return 1
  }
}

