// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


input='zpglnrxqenU';
let a = [];
a = input.split('');
b = [];

for(i=0;i<a.length;i++){
  var insert = a[i];
  for(j =0; j<i+1;j++){
    if(j===0){
      d = insert.toUpperCase();
      b.push(d);
    }else{
      d = insert.toLowerCase();
      b.push(d);
    }
  }
  if ((i+2)>a.length){
  }else{
  b.push('-');
  }
}

b = b.join('');

console.log(b);