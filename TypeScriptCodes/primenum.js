var n = 10;
var isPrime = true;
for (var i = 2; i < n; i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(n + " is prime");
}
else {
    console.log(n + " is not a prime");
}
