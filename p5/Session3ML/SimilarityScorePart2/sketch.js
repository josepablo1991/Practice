var data;

var resultP;
var users;
var resultDivs = [];

function preload() {
  data = loadJSON('movies.json');
}

function setup() {
  noCanvas();
  users = {};
  console.log(2);
  var dropdown = createSelect('');
  for (var i = 0; i < data.users.length; i++) {
    var name = data.users[i].name;
    dropdown.option(name);
    users[name] = data.users[i];
  }

  var button = createButton('submit');
  button.mousePressed(findNearestNeighboors);

  resultP = createP('');


  function findNearestNeighboors(){
  for(var i =0;i < resultDivs.length;i++){
    resultDivs[i].remove();
    }
    resultDivs = [];
    var name = dropdown.value();
    var similarityScores = {};

    for (var i=0; i< data.users.length;i++){
      var other = data.users[i].name
      if(other != name){
        var similarity = eclidianDistance(name,other);
        similarityScores[other] = similarity;
      } else {
        similarityScores[other] = -1
      }
    }
    data.users.sort(compareSimilarity);

    function compareSimilarity(a,b) {
      var score1 = similarityScores[a.name];
      var score2 = similarityScores[b.name];
      return score2-score1;
    }
    console.log(data.users);
    var k = 5
    for (var i = 0; i<k;i++){
      var name = data.users[i].name;
      var div = createDiv(name +':  '+similarityScores[name]);
      resultDivs.push(div);
      resultP.parent(div);
    }
  }
}

function eclidianDistance(name1,name2) {


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

  return similarity;
}