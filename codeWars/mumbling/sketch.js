
input = 'abcde'
c = [];

let dict = []

a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (i=0;i<a.length;i++){
  dict.push({
    letter: a[i],
    value:i +1
  })
}

b = input.split('');

for(i=0;i<b.length; i ++){
  check_val= b[i];
  for(j=0;j<a.length;j++){
      if(dict[j].letter === check_val){
        for(k=0;k<dict[j].value;k++){
            c.push(dict[j].letter);
        }
      }else{}
  }
}

c = c.join('');

console.log(c);