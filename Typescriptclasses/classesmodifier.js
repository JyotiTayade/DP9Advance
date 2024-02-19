var modifier = /** @class */ (function () {
    function modifier() {
        this.x = 100;
        this.name = 'Aarti';
    }
    modifier.prototype.display = function () {
        console.log(this.x);
        console.log(this.x + " == " + this.name);
    };
    return modifier;
}());
var m = new modifier();
m.display();
console.log(m.name);
