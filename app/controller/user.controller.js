var app = angular.module('myApp');

function User(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

app.controller( 'userController', function ($location, userService) {
    this.otherName = "The old Name"
    this.users = userService.findAll();
    this.changeName = function () {
        this.otherName = "The New Name";
    }
    this.url = $location.absUrl();
} );
