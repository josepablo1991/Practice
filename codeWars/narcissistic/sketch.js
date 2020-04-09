//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634


n = 1634;
var digits = (""+n).split("");
var power = digits.length;
var sum = 0;
var isNar = false;

for (i=0;i<digits.length;i++){

  var a = digits[i]
   b = parseInt(a,10);
   b = Math.pow(b,power);
  sum += b;
}

if(n===sum){
  isNar = true;
} else {
  isNar = false;
}

console.log(isNar);

