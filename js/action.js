let showContent = document.getElementById("content");
let title = document.getElementById("title");
let course;

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
  course = courseData;
  title.innerText = courseData.name;

  showContent.innerHTML = "";
  // console.log(courseData.holes[0].teeBoxes[0]);

  showContent.insertAdjacentHTML(
    "beforeend",
    `
      <select class="selections" id="difficulty" onchange="courseContent(this.options[difficulty.selectedIndex].value)">
        <option selected disabled>Select Difficulty</option>
      </select>
      <select class="selections">
        <option selected disabled>Select Players</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>  
    `
  );

  let difficulty = document.getElementById("difficulty");

  for (let i = 0; i < 4; i++) {
    difficulty.insertAdjacentHTML(
      "beforeend",
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


  
};
