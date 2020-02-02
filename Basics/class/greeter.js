var student = /** @class */ (function () {
    function student(firstName, middleNameInitial, lastName) {
        this.firstName = firstName;
        this.middleNameInitial = middleNameInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleNameInitial + " " + lastName;
    }
    return student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user2: Person = { firstName: "Jane", lastName: "User" };
var user3 = new student("Mohd", "Rafique", "Ahmad");
document.body.textContent = greeter(user3);
