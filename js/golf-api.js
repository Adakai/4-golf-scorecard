(function getCourses() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      allCourses = JSON.parse(this.responseText);
      displayCourses(allCourses.courses);
    };
  };
  xhr.open('GET', `https://golf-courses-api.herokuapp.com/courses`, true);
  xhr.send();
}());

function getCourse(id) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      course = JSON.parse(this.responseText);
      getDifficulty(course.data);
    };
  };
  xhr.open('GET', `https://golf-courses-api.herokuapp.com/courses/${id}`, true);
  xhr.send();
};

