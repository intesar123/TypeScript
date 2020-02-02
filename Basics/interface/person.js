function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user1 = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter(user1);
