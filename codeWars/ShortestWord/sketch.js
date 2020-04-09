// Simple, given a string of words, return the length of the shortest word(s).

input = "bitcoin take over the world maybe who knows perhaps";

let a = input.split(' ');
s = 0;
for(i=0;i<a.length;i++){
  var b = a[i].split('');
 if (s ===0){
   s = b.length;
 }else if(b.length < s){
   s = b.length;
  }
}

console.log(s);

