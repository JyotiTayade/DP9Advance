var Student1 = /** @class */ (function () {
    function Student1(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    Student1.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.marks);
    };
    return Student1;
}());
var s = new Student1(11, 'Jyoti', 245);
s.display();
