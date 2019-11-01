let showContent = document.getElementById('content');
let title = document.getElementById('title');

function displayCourses(allCourses) {
  
  for(let i = 0; i < allCourses.length; i++) {
    showContent.insertAdjacentHTML('beforeend', `
      <div class="card" style="width: 18rem;">
        <img src="${allCourses[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${allCourses[i].name}</h5>
          <p class="card-text"></p>
          <a href="#" onclick="getCourse(${allCourses[i].id})" class="btn btn-secondary">Select Course</a>
        </div>
      </div>
    `);
  };
};

function displayCourse(currentCourse) {
  showContent.innerHTML = '';
  title.innerText = currentCourse.name;

  for(let i = 0; i < currentCourse.holes[0].teeBoxes.length; i++) {
    showContent.insertAdjacentHTML('beforeend', `
    <div>${currentCourse.holes[0].teeBoxes[i].teeType}</div>
    `);
  }; 
};