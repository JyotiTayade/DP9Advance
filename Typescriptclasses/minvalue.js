var arr2 = [8, 2, 9, 4, 7];
var p = 0;
console.log("original array==> " + arr2);
for (var i = 0; i < arr2.length; i++) {
    p = Math.min(p, arr2[i]);
}
console.log("min value is==> " + p);
