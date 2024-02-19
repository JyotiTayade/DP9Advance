var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log(this.id + " == " + this.name);
    };
    Student.prototype.showInfo = function () {
        return 'this is method.';
    };
    return Student;
}());
var st = new Student(100, 'Kirti');
st.display();
st.showInfo();
