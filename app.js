let computerScore = 0;
let playerScore = 0;

function checkWinner(player) {
  const computer = generateOption();
  renderInputs(computer, 'computer');
  renderInputs(player, 'player');

  let situation = 'Win';
  if (computer === player) {
    situation = 'Draw';
  } else if (computer === 'rock' && player === 'scissors' || computer === 'scissors' && player === 'paper' || computer === 'paper' && player === 'rock') {
    situation = 'Lose';
    computerScore++;
  }else{
    playerScore++;
  }
  document.getElementById('situation').textContent = situation;
  document.getElementById('score').textContent = `${computerScore} : ${playerScore}`
}

function generateOption() {
  let options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)];
}

function renderInputs(option, id) {
  let src = '';
  if (option === 'rock') {
    src = './ass/rock.png'
  } else if (option === 'scissors') {
    src = './ass/scissors.png'
  } else {
    src = './ass/paper.png'
  }
  document.getElementById(id).src = src
}
