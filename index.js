var readlineSync = require("readline-sync")

//Top Performers
var topPerformers = [
  {
    name: 'sree',
    score: 5
  },
  {
    name: 'siri',
    score: 4
  }
]


//Array of Objects
var gameArr = [
  {
    question: "How many individual centuries have been scored in World Cup finals so far?\na. five\nb. six\nc. seven\nd. eight \n",
    answer: 'b'
  },
  {
    question: "Who remains the only captain to have not gotten a chance to bat in a World Cup final so far?\na. Steve Waugh\nb. Ian Chappell\nc. Wasim Akram\nd. Graham Gooch  \n",
    answer: 'a'
  },
  {
    question: "Which edition holds the record for the most maidens in a World Cup final?\na. 1975\nb. 1979\nc. 1983\nd. 1987  \n",
    answer: 'c'
  },
  {
    question: "Which bowler holds the unwanted record for the most expensive figures in a World Cup final?\na. Dilhara Fernando\nb. Trent Boult\nc. Nuwan Kulasekara\nd. Javagal Srinath  \n",
    answer: 'd'
  },
  {
    question: "Who has scored the most runs overall in men's World Cups?\na. AB De Villiers \nb. Sachin Tendulkar \nc. Brain Lara \nd. Ricky Ponting  \n",
    answer: 'b'
  }
]

//Welcome message
var name = readlineSync.question('Wanna Play World Cup Quiz? Enter Name :  ')

console.log("Welcome " + name + ", Let's Start ")
console.log('---------------------------------')
var score = 0


//Main Code
for (let i = 0; i < gameArr.length; i++) {
  qa(gameArr[i].question, gameArr[i].answer)
}


function qa(question, answer) {
  var userAns = readlineSync.question(question)

  if (userAns === answer) {
    console.log('right!')
    score += 1
  } else {
    console.log('wrong!')
  }
  console.log('Your current score is:  ' + score)
  console.log('------------------------------------')
}


//Rating the Player
console.log('Your final score is : ' + score)
if (score === 5) {
  console.log('Congrates! ' + name + ', Your are a Five Star Performer')
} else if (score < 5 && score >= 3) {
  console.log('Good Job ' + name + ', You are a Three Start Performer')
} else {
  console.log('Better Luck Next Time')
}

console.log('----------------------------------------')


//top performers
function highScores() {
  console.log('Checkout the top performers : ')
  topPerformers.map(ele => console.log(ele.name + " : " + ele.score))
  console.log('---------------------------------------')
  console.log('Wanna be one ? send your score screenshot.')
}

highScores()







