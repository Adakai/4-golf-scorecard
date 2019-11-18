let showContent = document.getElementById('content');
let title = document.getElementById('title');
let run = false;
let contentContainer;
let course;
let scoreCard;

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
  course = courseData.holes;
  title.innerText = courseData.name;

  showContent.innerHTML = '';
  // console.log(courseData.holes[0].teeBoxes[0]);

  showContent.insertAdjacentHTML(
    'beforeend',
    `
      <div id="content_container">
        <div id="selections">
          <select class="selection" id="difficulty" onchange="showHoles(this.options[difficulty.selectedIndex].value)">
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
          ${course[0].teeBoxes[i].teeType}
        </option>
      `
    );
  }
}

function showHoles(tee) {
  if(run === false) {
    run = true;
    contentContainer.insertAdjacentHTML(
      'beforeend',
      `
        <div id="score_card">
          <div class="mini-box-head">
            <div id="col" class="column">Hole</div>
            <div class="column">Yards</div>
            <div class="column">Par</div>
          </div>  
        </div>
      `
    );

    for(let h = 0; h <= course.length; h++) {
      console.log(course[h])
      scoreCard = document.getElementById('score_card');
      scoreCard.insertAdjacentHTML(
        'beforeend', 
        `
        <div class="mini-box">
          <div id="col${course[h].hole}" class="column">${course[h].hole}</div>
          <div id="yar${course[h].hole}" class="column">${course[h].teeBoxes[tee].yards}</div>
          <div id="par${course[h].hole}" class="column">${course[h].teeBoxes[tee].par}</div>
        </div>
        `
      ) 
    };
  } else {
    scoreCard.innerHTML = '';

    scoreCard.insertAdjacentHTML(
      'beforeend',
      `
        <div class="mini-box-head">
          <div id="col" class="column">Hole</div>
          <div class="column">Yards</div>
          <div class="column">Par</div>
        </div>  
      `
    );


    for(let h = 0; h <= course.length; h++) {
      console.log(course[h])
      scoreCard = document.getElementById('score_card');
      scoreCard.insertAdjacentHTML(
        'beforeend', 
        `
        <div class="mini-box">
          <div id="col${course[h].hole}" class="column">${course[h].hole}</div>
          <div id="yar${course[h].hole}" class="column">${course[h].teeBoxes[tee].yards}</div>
          <div id="par${course[h].hole}" class="column">${course[h].teeBoxes[tee].par}</div>
        </div>
        `
      ) 
    };
  }
};

// function buildHoles(holes) {
//   if(run === false) {
//     for(let c = 0; c <= holes.length; c++) {
//       $('#score_card').append(`<div id="col${holes[c]}" class="column">Hole ${holes[c]}</div>`);
//     };
//     run = true;
    
//   } else {
    
//   }
// };


// function buildHoles() {
//     for(let h = 0; h <= 18; h++) {
//       $('#col' + h).append(`<div id="" class="mini-box"></div>`)
//     };
// };

// function addPlayer() {
//   buildHoles();
//   $('.namelist').append(`<div contenteditable="true" class="namelist"><span>Name</span></div>`)
// }
