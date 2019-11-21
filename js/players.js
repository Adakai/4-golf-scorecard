class Player {
  constructor() {
    this.names = [];
    this.score = [];
    this.totalScore = 0;
    this.scoreIn = 0;
    this.scoreOut = 0;
  }

  addPlayer(player) {
    this.names.push(player);
    console.log(this.names);
  }

  updateScore(score) {
    this.score.push(score);
    console.log(score);
  }

  setScore() {
    this.totalScore = 0;
    for(let i = 0; i < this.score.length; i++) {
      this.totalScore += Number(this.score[i]);
    }
    showScore();
  }

  scoreIn() {

  }

  scoreOut() {

  }
}

let myPlayer = new Player();
