class student {
    fullName: string;
    constructor(public firstName: string, public middleNameInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleNameInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

//let user2: Person = { firstName: "Jane", lastName: "User" };
let user3 = new student("Mohd", "Rafique", "Ahmad");
document.body.textContent = greeter(user3);