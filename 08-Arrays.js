// let students = [];
// let teachers = new Array();
let students = ["John", "Jane", "Jim"];
let teachers = ["Mr. Smith", "Ms. Johnson", "Mrs. Brown"];
 

document.getElementById("students1").innerHTML = students;
document.getElementById("teachers1").innerHTML = teachers[0];

students[1] = "Jack";
document.getElementById("students2").innerHTML = students.join(", ");
console.log(students.length);
document.getElementById("teachers2").innerHTML = teachers.join(", ");

let loopcount = 0;
while (loopcount < students.length) {
    document.getElementById("students3").innerHTML += students[loopcount] + "<br>";
    loopcount++;
}

