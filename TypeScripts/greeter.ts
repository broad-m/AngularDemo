interface  Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string

    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + lastName;
    }

    SayHi(msg:number){

        let a=1;
        console.log(a+msg);
    }
}

function greeter(person: Person) {
    return "Hello, " + person;
}
var user = new Student('tom','JJ');

user.SayHi(1);

document.body.innerHTML = greeter(user);