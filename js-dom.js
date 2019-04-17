const createStudentComponent = student => {
  // evaluate student's score and apply appropriate class to h2 tag
  // let studentClass = "";
  // // if/else method
  // if (student.score >= 60) {
  //   studentClass = "passing";
  // } else {
  //   studentClass = "failing";
  // }

  // using ternary
  student.score >= 60 ? (studentClass = "passing") : (studentClass = "failing");

  return `
  <div class="student">
    <h2 class="xx-large ${studentClass}">${student.name}</h2>
    <section>${student.subject}</section>
    <p>${student.info}</p>
  </div>`;
};

// locate the div for which to output the student component
const studentContainer = document.querySelector("#container");

for (let i = 0; i < students.length; i++) {
  // grab each student from the students array
  const student = students[i];
  // add the student component to the inner HTML of the container
  studentContainer.innerHTML += createStudentComponent(student);
}
