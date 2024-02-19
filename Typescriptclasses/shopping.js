var shopping = /** @class */ (function () {
    function shopping(proid, proname, proquan, proprice) {
        this.proid = proid;
        this.proname = proname;
        this.proquan = proquan;
        this.proprice = proprice;
    }
    shopping.prototype.calculatebill = function () {
        var total = 'X';
        if (this.proquan <= 0) {
            console.log("somthing is going wrong.....");
        }
        else {
            this.total = (this.proquan * this.proprice);
            console.log(this.proid + " , " + this.proname + " ,  " + this.proquan + "  , " + this.proprice + "==Total bill== " + this.total);
        }
    };
    return shopping;
}());
var sh = new shopping(500, 'roomfreshner', 2, 250);
sh.calculatebill();
