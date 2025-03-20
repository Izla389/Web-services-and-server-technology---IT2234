let students = [
    { name: 'Anan', sex: 'Male', course: 'IT', GPA: 2.1 },
    { name: 'Bhan', sex: 'Female', course: 'Tec', GPA: 2.6 },
    { name: 'Camal', sex: 'Male', course: 'Bio', GPA: 2.5 },
    { name: 'Dea', sex: 'Female', course: 'IT', GPA: 3.2 },
    { name: 'Alex', sex: 'Male', course: 'Tec', GPA: 3.0 },
    { name: 'Sam', sex: 'Female', course: 'IT', GPA: 3.8 },
    { name: 'Zah', sex: 'Female', course: 'Bio', GPA: 3.5 },
    { name: 'kumar', sex: 'Male', course: 'Tec', GPA: 2.9 },
    { name: 'jams', sex: 'Female', course: 'Tec', GPA: 3.3 },
    { name: 'Ram', sex: 'Male', course: 'IT', GPA: 3.6 }
];

console.log("All Students:", students);

// Find female students
let female_students = students.filter(student => student.sex === 'Female');
console.log("Female Students:", female_students);

// Find students enrolled in IT course
let it_students = students.filter(student => student.course === "IT");
console.log("IT Students:", it_students);

// Find max and average GPA
let maxGPA = Math.max(...students.map(student => student.GPA));
let avgGPA = students.reduce((sum, student) => sum + student.GPA, 0) / students.length;

console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));
