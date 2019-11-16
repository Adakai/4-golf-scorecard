let showContent = document.getElementById('content');
let title = document.getElementById('title');
let run = false;
let contentContainer;
let course;

function displayCourses(allCourses) {
  for (let i = 0; i < allCourses.length; i++) {
    showContent.insertAdjacentHTML(
      'beforeend',
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
  course = courseData;
  title.innerText = courseData.name;

  showContent.innerHTML = '';
  // console.log(courseData.holes[0].teeBoxes[0]);

  showContent.insertAdjacentHTML(
    'beforeend',
    `
      <div id="content_container">
        <div id="selections">
          <select class="selection" id="difficulty" onchange="courseContent(this.options[difficulty.selectedIndex].value)">
            <option selected disabled>Select Difficulty</option>
          </select>
          <input type="text">
          <button></button>
        </div>
      </div>
    `
  );

  let difficulty = document.getElementById('difficulty');
  contentContainer = document.getElementById('content_container')

  for (let i = 0; i < 4; i++) {
    difficulty.insertAdjacentHTML(
      'beforeend',
      `
        <option value="${i}">
          ${courseData.holes[0].teeBoxes[i].teeType}
        </option>
      `
    );
  }
}

function courseContent(tee) {
  console.log(course.holes[0].teeBoxes[tee]);

  if(run === false) {
    contentContainer.insertAdjacentHTML(
      'beforeend',
      `
        <div id="score_card"></div>
      `
    );

    buildCol();
  } else {
    buildCol();
  }
  
};

function buildCol() {
  if(run === false) {
    for(let c = 0; c <= 18; c++) {
      $('#score_card').append(`<div id="col${c}" class="column">Hole ${c}</div>`);
    };
    run = true;
    buildHoles();
  } else {
    
  }
};


function buildHoles() {
    for(let h = 0; h <= 18; h++) {
      $('#col' + h).append(`<div id="" class="mini-box"></div>`)
    };
};

function addPlayer() {
  buildHoles();
  $('.namelist').append(`<div contenteditable="true" class="namelist"><span>Name</span></div>`)
}
