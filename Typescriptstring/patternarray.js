var Reversting = /** @class */ (function () {
    function Reversting() {
    }
    Reversting.prototype.revserStr = function (str) {
        var word = '';
        for (var i = str.length - 1; i >= 0; i--) {
            word = word + str.charAt(i);
        }
        return word;
    };
    return Reversting;
}());
var str = new Reversting();
console.log(str.revserStr('Jyoti'));
