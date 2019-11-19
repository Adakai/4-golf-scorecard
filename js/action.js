let showContent = document.getElementById("content");
let title = document.getElementById("title");
let contentContainer;
let course;
let scoreCard;

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
  console.log(courseData.holes[0].teeBoxes[0]);

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
    if(course[0].teeBoxes[i] !== undefined) {
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
  console.log(course[0].teeBoxes);
  scoreCard.innerHTML = "";
  let totalYards = 0;
  let totalPar = 0;
  scoreCard.insertAdjacentHTML(
    "beforeend",
    `
        <div id="score_title">
          <div id="col" class="column mini-box-head">Hole</div>
          <div class="column mini-box-head">Yards</div>
          <div id="par" class="column mini-box-head">Par</div>
        </div>  
      `
  );

  for (let h = 0; h <= course.length - 1; h++) {
    totalYards += course[h].teeBoxes[tee].yards;
    totalPar += course[h].teeBoxes[tee].par;
    scoreCard.insertAdjacentHTML(
      "beforeend",
      `
        <div id="player_points${h}">
          <div id="col${course[h].hole}" class="column mini-box">${course[h].hole}</div>
          <div id="yar${course[h].hole}" class="column mini-box">${course[h].teeBoxes[tee].yards}</div>
          <div id="par${course[h].hole}" class="column mini-box">${course[h].teeBoxes[tee].par}</div>
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
      </div>
    `
  );
}

function addPlayer() {
  let player = document.getElementById('player').value;
  let scoreTitle = document.getElementById('score_title');
  let playerTotal = document.getElementById('player_total')
  let playerPoints;
  let run = false;

  console.log(playerPoints);
  
  myPlayer.addPlayer(player);
  scoreTitle.innerHTML = '';

  scoreTitle.insertAdjacentHTML(
    'beforeend', 
    `
      <div id="col" class="column mini-box-head">Hole</div>
      <div class="column mini-box-head">Yards</div>
      <div id="par" class="column mini-box-head">Par</div>
    `
  )

  if(run === true) {
    console.log('hi');
    playerPoints.innerHTML = '';

    playerPoints.insertAdjacentHTML(
      'beforeend',
      `
        <div id="col${course[h].hole}" class="column mini-box">${course[h].hole}</div>
        <div id="yar${course[h].hole}" class="column mini-box">${course[h].teeBoxes[tee].yards}</div>
        <div id="par${course[h].hole}" class="column mini-box">${course[h].teeBoxes[tee].par}</div>
      `
    )
  }
  
  for(let p = 0; p < myPlayer.names.length; p++) {
    scoreTitle.insertAdjacentHTML(
      'beforeend',
      `
        <div id="player_${myPlayer.names[p]}" contentEditable="true" class="column mini-box-head">${myPlayer.names[p]}</div>
      `
    )
    for(let i = 0; i < course.length; i++) {
      playerPoints = document.getElementById(`player_points${i}`);
      console.log(playerPoints)
      playerPoints.insertAdjacentHTML(
        'beforeend',
        `
          <div id="player_${myPlayer.names[p]}${i}_points" contentEditable='true' class="column mini-box">0</div>
        `
      )
    }
  }

  playerTotal.insertAdjacentHTML(
    'beforeend',
    `
      <div class="column mini-box">total</div>
    `
  )
};

// function show(player) {
//   console.log(player);
// }

