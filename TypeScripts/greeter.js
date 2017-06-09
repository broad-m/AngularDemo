var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    Student.prototype.SayHi = function (msg) {
        var a = 1;
        console.log(a + msg);
    };
    return Student;
}());
function greeter(person) {
    return "Hello, " + person;
}
var user = new Student('tom', 'JJ');
user.SayHi(1);
document.body.innerHTML = greeter(user);
