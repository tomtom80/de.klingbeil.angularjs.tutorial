app.controller( 'userController', function () {
    this.otherName = "The old Name"
    this.changeName = function () {
        this.otherName = "The New Name";
    }
} );