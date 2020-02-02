interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user1: Person = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(user1);