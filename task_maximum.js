var students = [
    { yearOfStuding: 1, facultyName: "Факультет 1" },
    { yearOfStuding: 2, facultyName: "Факультет 2" },
    { yearOfStuding: 3, facultyName: "Факультет 1" },
    { yearOfStuding: 1, facultyName: "Факультет 3" },
    { yearOfStuding: 4, facultyName: "Факультет 2" },
    { yearOfStuding: 2, facultyName: "Факультет 1" },
    { yearOfStuding: 3, facultyName: "Факультет 3" },
    { yearOfStuding: 4, facultyName: "Факультет 2" },
    { yearOfStuding: 1, facultyName: "Факультет 2" },
    { yearOfStuding: 2, facultyName: "Факультет 1" }
];

var facultyNames = students.map(student => student.facultyName);
console.log(facultyNames);

var totalYearsOfStuding = students.reduce((total, student) => total + student.yearOfStuding, 0);
console.log(totalYearsOfStuding);