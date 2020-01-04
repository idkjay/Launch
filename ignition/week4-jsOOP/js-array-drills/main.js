let teachers = ["Arrington", "Kincart", "Alberts", "Pickett"]

let rooms = [
  ["Andy", "Rodolfo", "Lynn", "Talia"],
  ["Al", "Ross", "Jorge", "Dante"],
  ["Nick", "Kim", "Jasmine", "Dorothy"],
  ["Adam", "Grayson", "Aliyah", "Alexa"]
]

//List all the teachers with an even index number (including 0)

let evenIndex = () => {
  let evens = [];
  teachers.forEach((teacher)=>{
    if((teachers.indexOf(teacher))%2 === 0) {
      evens.push(teacher);
    }
  });
  return evens;
}
evenIndex(teachers)
console.log(evenIndex())

//List all of the teachers with the letter i in their name

let iInName = () => {
  let iNames =[];
  teachers.forEach((teacher) => {
    if(teacher.includes("i")) {
      iNames.push(teacher);
    }
  });
  return iNames
}

iInName(teachers)
console.log(iInName())

//Return the number of teachers

let teacherCount = () => {
  return teachers.length
}

console.log(`There are ` + teacherCount() + ` teachers.`)

//Return the number of rooms of students

let roomCount = () => {
  return rooms.length
}

console.log(`There are ${roomCount()} rooms.`)

//Return the number of students in all the rooms

let studentCount = () => {
  let people = 0;
  for (i=0;i<rooms.length; i++) {
    for (l=0;l<rooms[i].length;l++){
      people ++;
    }
  }
  return people
}

console.log(`There are ` + studentCount(rooms) + ' students in all the rooms.')

//Return the students who have an i in their names

let whichStudents = () => {
  let iStudents = [];
  rooms.forEach((room)=>{
    room.forEach((student)=>{
      if (student.includes("i"))
      iStudents.push(student)
    })
  })
  return iStudents
}

console.log(`The students who have an 'i' in their name are  ${whichStudents()}.`)

//Return the teacher who has the given student in their room

let whichTeacher = (student) => {
  for (i=0;i<rooms.length;i++) {
    if (rooms[i].includes(student))
    return teachers[i]
  }
}

whichTeacher("Jorge")
whichTeacher("Alexa")

console.log(`The teacher who has Jorge is ${whichTeacher("Jorge")}.`)
console.log(`The teacher who has Alexa is ${whichTeacher("Alexa")}.`)
