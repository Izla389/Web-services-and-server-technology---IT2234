const students = require('./studentdb')

function getStudent() {
return students;
}

function getstudents(id) {
    return students.find((student)=>student.regno==id)
}


function getByGender(gender) {
    return students.filter((student)=>student.gender==gender)
}
    

function getByCourse(course) {
    return students.filter((student) => student.course.toLowerCase() === course.toLowerCase());
}

module.exports = { getStudent, getstudents, getByGender, getByCourse };
