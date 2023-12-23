// Data: Array of Objects
const STUDENTDB = [
  {
    fullname: "Ulas",
    age: 12,
    course: "Python",
    shift: "SAT 10:00AM-11:30AM",
    terms: 6
  },
  {
    fullname: "Visalrith",
    age: 11,
    course: "HTML/CSS",
    shift: "SUN 08:30AM-10:00AM",
    terms: 3
  },
  {
    fullname: "Ratanak",
    age: 10,
    course: "Javascript",
    shift: "SUN 02:00PM-03:30PM",
    terms: 7
  }
]

let newStudents = 0

function displayStudents() {
  const students = document.querySelector("#studentTable")
  
  for (let i = 0; i < STUDENTDB.length; i++) {
    let currentStudent = STUDENTDB[i]

    students.innerHTML += `
    <tr>
        <td>${i+1}</td>
        <td>${currentStudent.fullname}</td>
        <td>${currentStudent.age}</td>
        <td>${currentStudent.course}</td>
        <td>${currentStudent.shift}</td>
        <td>${currentStudent.terms}</td>
    </tr>
    `
  } 
}

function addNewStudent() {
  const addStudentForm = document.querySelector("#addStudentForm")
  const students = document.querySelector("#studentTable")

  addStudentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const fullname = document.querySelector("#fullname")
    const age = document.querySelector("#age")
    const course = document.querySelector("#course")
    const shift = document.querySelector("#shift")
    const terms = document.querySelector("#terms")
    
    newStudents = newStudents + 1
    students.innerHTML += `
    <tr>
        <td>${STUDENTDB.length + newStudents}</td>
        <td>${fullname.value}</td>
        <td>${age.value}</td>
        <td>${course.value}</td>
        <td>${shift.value}</td>
        <td>${terms.value}</td>
    </tr>
    `

    fullname.value = ``
    age.value = ``
    course.value = ``
    shift.value = ``
    terms.value = 1

  })
}


function main() {
  console.log("everything is running from the main function")

  displayStudents()

  addNewStudent()
}


main()