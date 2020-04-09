var data;




function preload(){

  data = loadJSON ('movies.json');

}

function setup(){
  noCanvas();
  var users = {};//empty object

  var dropdown1 = createSelect('');
  var dropdown2 = createSelect('');
  for(var i =0; i<data.users.length;i++){
    var name = data.users[i].name;
    dropdown1.option(name);
    dropdown2.option(name);
    users[name] = data.users[i];
  }
  var button = createButton('submit');
  button.mousePressed(euclideanSimilarity);
  console.log(users);
  console.log(4);

  function euclideanSimilarity(){

    var person1 = dropdown1.value;
    var person2 = dropdown2.value;
    console.log(person1,person2);
  }
}

