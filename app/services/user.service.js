var app = angular.module('myApp',[]);

app.service('userService',function () {
    this.findAll = function () {
        return [new User("tom","klingbeil",1), new User("ralf", "engel",100), new User("viktor","Hess",10)];
    }
});