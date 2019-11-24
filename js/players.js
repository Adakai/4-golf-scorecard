class Player {
  constructor() {
    this.names = [];
    this.score = 0;
    this.ids = [];
    this.totalScore1 = 0;
    this.totalScore2 = 0;
    this.totalScore3 = 0;
    this.totalScore4 = 0;
    this.total1 = [];
  }

  addPlayer(player) {
    this.names.push(player);
  }

  updateScore(score) {
    this.score = 0;
    this.scoreOut = score;
    this.score = score;
    // console.log(score);
  }

  setId(id) {
    for(let i = 0; i < this.ids.length + 1; i++) {
      if(id === this.ids[i] || id === this.ids[i + 1] || id === this.ids[i + 2] || id === this.ids[i + 3])  {
        return myPlayer.setScore(id);
      } else if(this.ids.length === 0) {
        this.ids.push(id);
        return myPlayer.setScore(id)
      } else {
        this.ids.push(id);
        return myPlayer.setScore(id)
      };
    }
  }

  setScore(id) {
    this.totalScore = 0;
    console.log(id)
    if(this.ids[0] === id) {
      this.totalScore1 += Number(this.score)
      this.total1.push(this.score);
      showScore(id);
    }
    if(this.ids[1] === id) {
      this.totalScore2 += Number(this.score)
      showScore(id);
    }
    if(this.ids[2] === id) {
      this.totalScore3 += Number(this.score)
      showScore(id);
    }
    if(this.ids[3] === id) {
      this.totalScore4 += Number(this.score)
      showScore(id);
    }
    
  }

  scoreIn() {

  }

  scoreOut() {

  }
}

let myPlayer = new Player();
