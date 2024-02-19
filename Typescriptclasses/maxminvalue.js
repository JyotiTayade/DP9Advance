var arr2 = [1, 2, 9, 4, 7];
var z = 0;
console.log("original array==> " + arr2);
for (var i = 0; i < arr2.length; i++) {
    z = Math.max(z, arr2[i]);
    //console.log("max value is==> " +Math.max())
}
console.log("max value is==> " + z);
