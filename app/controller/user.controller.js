function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

app.controller( 'userController', function () {
    this.otherName = "The old Name"
    this.users = [new User("tom","klingbeil"), new User("ralf", "engel"), new User("viktor","Hess")];
    this.changeName = function () {
        this.otherName = "The New Name";
    }
} );