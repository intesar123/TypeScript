function greeter(person) {
    return "Hello, " + person;
}

// if i change user variable to array not getting error so see in the next file by using type annotation
let user = [1, 2, 3, 4];

document.body.textContent = greeter(user);