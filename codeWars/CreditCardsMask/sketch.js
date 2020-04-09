//
// function setup(){
//   noCanvas();
// var cc = 'lomsa ajhsbdasd';
//      let a = cc.split("");
//      console.log(a);
//      let b = new Array(a.length);
//        for (i =0; i<b.length;i++){
//          b.push("#");
//        }
//        for(i = b.length; i>4;i++){
//          b[i] = a[i];
//        }
//      return b ;
//      console.log(b);
//      console.log(1);
// }

let cc = 'lomsa ajhsbdasd';
     let a = cc.split("");
     let b = new Array(a.length);
       for (i =0; i<b.length;i++){
         b[i] ="#";
       }
       for(i = 0; i<(b.length -4);i++){
         a[i] = b[i];
       }
     // return b ;
     console.log(a);
     //c = a.toString()
     c = a.join('');
     console.log(c );
