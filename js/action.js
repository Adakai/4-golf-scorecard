let showContent = document.getElementById("content");
let title = document.getElementById("title");
let contentContainer;
let scoreCard;
let course;
let totalScore;

function displayCourses(allCourses) {
  for (let i = 0; i < allCourses.length; i++) {
    showContent.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card" style="width: 18rem;">
          <img src="${allCourses[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${allCourses[i].name}</h5>
            <p class="card-text"></p>
            <a href="#" onclick="getCourse(${allCourses[i].id})" class="btn btn-secondary">Select Course</a>
          </div>
        </div>
      `
    );
  }
}

function getDifficulty(courseData) {
  course = courseData.holes;
  title.innerText = courseData.name;

  showContent.innerHTML = "";
  // console.log(courseData.holes[0].teeBoxes[0]);

  showContent.insertAdjacentHTML(
    "beforeend",
    `
      <div id="content_container">
        <div id="selections">
          <div class="add-player">
            <input id="player" type="text" placeholder="John">
            <button class="btn btn-secondary" onclick="addPlayer()">Add Player</button>
          </div>
          <select class="selection" id="difficulty" onchange="setUpCard(this.options[difficulty.selectedIndex].value)">
            <option selected disabled>Select Difficulty</option>
          </select>
        </div>
      </div>
    `
  );

  let difficulty = document.getElementById("difficulty");
  contentContainer = document.getElementById("content_container");

  for (let i = 0; i < 4; i++) {
    if (course[0].teeBoxes[i] !== undefined) {
      difficulty.insertAdjacentHTML(
        "beforeend",
        `
          <option value="${i}">
            ${course[0].teeBoxes[i].teeType}
          </option>
        `
      );
    }
  }
}

function setUpCard(tee) {
  myPlayer.names = [];
  contentContainer.insertAdjacentHTML(
    "beforeend",
    `
      <div id="score_card"></div>
    `
  );
  scoreCard = document.getElementById("score_card");
  showHoles(tee);
}

function showHoles(tee) {
  // console.log(course[0].teeBoxes);
  scoreCard.innerHTML = "";
  let totalYards = 0;
  let totalPar = 0;
  let totalHcp = 0;
  scoreCard.insertAdjacentHTML(
    "beforeend",
    `
      <div id="score_title">
        <div id="col" class="column mini-box-head">Hole</div>
        <div class="column mini-box-head">Yards</div>
        <div id="par" class="column mini-box-head">Par</div>
        <div id="hcp" class="column mini-box-head">HCP</div>
      </div>  
    `
  );

  for (let h = 0; h <= course.length - 1; h++) {
    totalYards += course[h].teeBoxes[tee].yards;
    totalPar += course[h].teeBoxes[tee].par;
    totalHcp += course[h].teeBoxes[tee].hcp;
    scoreCard.insertAdjacentHTML(
      "beforeend",
      `
        <div id="player_points${h}">
          <div id="col${course[h].hole}" class="column mini-box">${course[h].hole}</div>
          <div id="yar${course[h].hole}" class="column mini-box">${course[h].teeBoxes[tee].yards}</div>
          <div id="par${course[h].hole}" class="column mini-box">${course[h].teeBoxes[tee].par}</div>
          <div id="hcp${course[h].hole}" class="column mini-box">${course[h].teeBoxes[tee].hcp}</div>
        </div>
      `
    );
  }

  scoreCard.insertAdjacentHTML(
    "beforeend",
    `
      <div id="player_total">
        <div class="column mini-box">Total</div>
        <div class="column mini-box">${totalYards}</div>
        <div id="total_par" class="column mini-box">${totalPar}</div>
        <div class="column mini-box">${totalHcp}</div>
      </div>
    `
  );

  scoreCard.insertAdjacentHTML(
    "beforeend",
    `
      <div id="player_out">
        <div class="column mini-box">Out</div>
        <div class="column inactive mini-box"></div>
        <div id="total_par" class="column inactive mini-box"></div>
        <div class="column inactive mini-box"></div>
      </div>
    `
  );

  scoreCard.insertAdjacentHTML(
    "beforeend",
    `
      <div id="player_in">
        <div class="column mini-box">in</div>
        <div class="column inactive mini-box"></div>
        <div id="total_par" class="column inactive mini-box"></div>
        <div class="column inactive mini-box"></div>
      </div>
    `
  );
}

function addPlayer() {
  if (myPlayer.names.length < 4) {
    if (document.body.contains(document.getElementById("score_card"))) {
      let player = document.getElementById("player").value;
      let scoreTitle = document.getElementById("score_title");
      let playerTotal = document.getElementById("player_total");
      let playerOut = document.getElementById("player_out");
      let playerIn = document.getElementById("player_in");
      let ranId = Math.floor(Math.random() * 1000);
      let playerPoints;
  
      myPlayer.addPlayer(player);
      scoreTitle.innerHTML = "";
  
      scoreTitle.insertAdjacentHTML(
        "beforeend",
        `
          <div id="col" class="column mini-box-head">Hole</div>
          <div class="column mini-box-head">Yards</div>
          <div id="par" class="column mini-box-head">Par</div>
          <div id="hcp" class="column mini-box-head">HCP</div>
        `
      );
  
      for (let p = 0; p < myPlayer.names.length; p++) {
        scoreTitle.insertAdjacentHTML(
          "beforeend",
          `
            <div id="player_${myPlayer.names[p]}" contentEditable="true" class="column mini-box-head">${myPlayer.names[p]}</div>
          `
        );
      }
  
      console.log(ranId + 'ran id');
      for (let i = 0; i < course.length; i++) {
        playerPoints = document.getElementById(`player_points${i}`);
        playerPoints.insertAdjacentHTML(
          "beforeend",
          `
            <div id="${ranId}${i}" contentEditable='true' class="column mini-box" onclick="updateScore(this.id)">0</div>
          `
        );
      }
  
      playerTotal.insertAdjacentHTML(
        "beforeend",
        `
          <div id="${ranId}" class="column mini-box">0</div>
        `
      );
  
      playerOut.insertAdjacentHTML(
        "beforeend",
        `
          <div class="column mini-box">0</div>
        `
      );
      
      playerIn.insertAdjacentHTML(
        "beforeend",
        `
          <div class="column mini-box">0</div>
        `
      );
  
  
      // if (!document.body.contains(document.getElementById("update_score"))) {
      //   showContent.insertAdjacentHTML(
      //     'beforeend',
      //     `
      //       <button id="update_score" class="btn btn-secondary" onclick="check()">Update Score</button>
      //     `
      //   )
      // }
    }
  } else {
    if (!document.body.contains(document.getElementById("warning"))) {
      showContent.insertAdjacentHTML(
        'beforeend',
        `
          <div id="warning">Max is 4 players</div>
        `
      )
    }

    setTimeout(function() {
      let warning = document.getElementById('warning');
      warning.innerHTML = '';
    }, 2000)
  }
}

function updateScore(id) {
  let currentId;
  
  if(id.length <= 4) {
    totalId = id.slice(0, -1);
    totalScore = document.getElementById(totalId);
  } else if (id.length > 5) {
    totalId = id.slice(0, -2);
    totalScore = document.getElementById(totalId);
  }

  score = document.getElementById(id);
  score.innerHTML = '';

  setTimeout(function() {
    checkScore();
  }, 1000)

  function checkScore() {
    if(score.textContent !== '') {
      myPlayer.updateScore(score.textContent);
      myPlayer.setScore(totalId);
    } else {
      setTimeout(function() {
        checkScore();
      }, 1000)
    }
  }
}

function showScore() {
//  let score = document.getElementById(totalScore);
 totalScore.innerText = '';
 totalScore.innerText = myPlayer.totalScore;
}


