var Student = /** @class */ (function () {
    function Student(id, name, sub1, sub2, sub3) {
        this.id = id;
        this.name = name;
        this.sub1 = sub1;
        this.sub2 = sub2;
        this.sub3 = sub3;
    }
    Student.prototype.percentage = function () {
        console.log("percentage = " + ((this.sub1 + this.sub2 + this.sub3) * 100 / 300));
    };
    Student.prototype.display = function () {
        console.log(this.id + "==" + this.name + "==" + this.sub1 + "==" + this.sub2 + "==" + this.sub3);
    };
    return Student;
}());
var st = new Student(11, 'Jyoti', 67, 78, 69);
st.display();
st.percentage();
