var StringPass = /** @class */ (function () {
    function StringPass() {
    }
    StringPass.prototype.revserStr = function (str) {
        var word = '';
        for (var i = str.length - 1; i >= 0; i--) {
            word = word + str.charAt(i);
        }
        return word;
    };
    StringPass.vowelCount = function (str) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) == 'a' || str.charAt(i) == 'u' || str.charAt(i) == 'o' || str.charAt(i) == 'e' || str.charAt(i) == 'i') {
                count++;
            }
        }
        return count;
    };
    return StringPass;
}());
var s = new StringPass();
console.log(s.revserStr('Jyoti'));
var cnt = StringPass.vowelCount('India');
console.log(cnt);
