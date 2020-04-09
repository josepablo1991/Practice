var data;

var resultP;

function preload() {
  data = loadJSON('movies.json');
}

function setup() {
  noCanvas();
  var users = {};
  var dropdown1 = createSelect('');
  var dropdown2 = createSelect('');
  for (var i = 0; i < data.users.length; i++) {
    var name = data.users[i].name;
    dropdown1.option(name);
    dropdown2.option(name);
    users[name] = data.users[i];
  }

  var button = createButton('submit');
  button.mousePressed(euclideanSimilarity);


  function euclideanSimilarity() {
    var name1 = dropdown1.value();
    var name2 = dropdown2.value();

    console.log(users[name1],users[name2]);

    var raitings1 = users[name1];
    var raitings2 = users[name2];

    // getting all the pointers from the object users
    var titles = Object.keys(raitings1);

     var i = titles.indexOf('name');
     titles.splice(i,1)
     var j = titles.indexOf('timestamp');
     titles.splice(j,1);
     var sumSquares = 0;
    for (var i =0; i<titles.length;i++){
      var title = titles[i]
      var raiting1 = raitings1[title];
      var raiting2 = raitings2[title];
      var diff = raiting1 - raiting2;
      sumSquares +=  diff*diff;
    }
    var d = sqrt(sumSquares);

    var similarity = 1/(1+d);
    createP(similarity);
  }
}