function User(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

app.controller( 'userController', function () {
    this.otherName = "The old Name"
    this.users = [new User("tom","klingbeil",1), new User("ralf", "engel",100), new User("viktor","Hess",10)];
    this.changeName = function () {
        this.otherName = "The New Name";
    }
} );