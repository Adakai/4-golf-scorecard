class Player {
  constructor(id) {
    this.names = [];
    this.score = 0;
    this.scoreIn = 0;
    this.scoreOut = 0;
    this.id = id;
  }

  addPlayer(player) {
    this.names.push(player);
    console.log(this.names);
  }

  updateScore() {

  }

  scoreIn() {

  }

  scoreOut() {

  }
}

let myPlayer = new Player();
