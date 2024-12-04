let books = ['fiction','horror','literacy','science']
let [fiction,horror,literacy,science,...book]=books
console.log(fiction);
console.log(horror);
console.log(literacy);
console.log(science);

let Student = {
    firstName : "joe",
    university : "MIT",
    studentid : 555
}
let (firstName,university,studentid,...stud) = Student;
console.log(firstName);
console.log(university);
console.log(studentid);





