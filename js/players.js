class Player {
  constructor() {
    this.names = [];
    this.score = [];
    this.ids = [];
    this.player1 = '';
    this.player2 = '';
    this.player3 = '';
    this.player4 = '';
    this.totalScore = 0;
    this.scoreIn = 0;
    this.scoreOut = 0;
  }

  addPlayer(player) {
    this.names.push(player);
  }

  updateScore(score) {
    this.score.push(score);
    // console.log(score);
  }

  setScore(id) {
    // for(let i = 0; i < this.ids.length + 1; i++) {
    //   if(id === this.ids[i] || id === this.ids[i + 1] || id === this.ids[i + 2] || id === this.ids[i + 3])  {
    //     return;
    //   } else if(this.ids.length === 0) {
    //     console.log('h');
    //     return this.ids.push(id);
    //   } else {
    //     return this.ids.push(id);
    //   };
    // }

    // for(let i = 0; i < this.score.length; i++) {
      
    // }
    
    console.log(this.ids);
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
