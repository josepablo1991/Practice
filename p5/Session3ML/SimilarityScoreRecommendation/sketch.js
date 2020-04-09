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
  console.log(6);

  var dropdowns = [];

  var  titles = data.titles;
  for (var i=0; i<titles.length;i++){
    var div = createDiv(titles[i]);
    var dropdown = createSelect('');
    dropdown.title = titles[i]; // attaching this variable
    dropdown.parent(div);
    dropdown.option('not seen');
    dropdowns.push(dropdown);

    for (var stars =1 ; stars <6;stars++){
      dropdown.option(stars);
    }
  }

  var button = createButton('submit');
  button.mousePressed(predictRatings);
  resultP = createP('');

   function  predictRatings(){
     var newUser = {};
     for (var i =0; i< dropdowns.length;i++){
       var title = dropdowns[i].title;
       var rating = dropdowns[i].value();
       if (rating == 'not seen'){
         rating = null;
       }
       newUser[title] = rating;
     }
     findNearestNeighboors(newUser);
   }


  function findNearestNeighboors(user){
  for(var i =0;i < resultDivs.length;i++){
    resultDivs[i].remove();
    }
    resultDivs = [];
    var similarityScores = {};

    for (var i=0; i< data.users.length;i++){
      var other = data.users[i]
      var similarity = eclidianDistance(user,other);
      similarityScores[other.name] = similarity;
    }
    data.users.sort(compareSimilarity);

    function compareSimilarity(a,b) {
      var score1 = similarityScores[a.name];
      var score2 = similarityScores[b.name];
      return score2-score1;
    }

    for (var i =0; i<data.titles.length;i++){
      var title = data.titles[i];
      if (user[title]== null){
        var k = 5
        var weightedSum =0;
        var similaritySum =0;
        for (var j = 0; j<k;j++){
          var name = data.users[j].name;
          var sim = similarityScores[name];
          var ratings = data.users[j];
          var rating = ratings[title];
          if(rating != null){
            weightedSum += rating * sim;
            similaritySum += sim;
          }
        }
      var stars = nf(weightedSum/similaritySum,1,2)
      var div = createDiv(title + ': ' + stars);
      resultDivs.push(div);
      div.parent(resultP);

    }

    // var k = 5
    // for (var i = 0; i<k;i++){
    //   var name = data.users[i].name;
    //   var score = nf(similarityScores[name],1,2);
    //   var div = createDiv(name +':  '+score);
    //   resultDivs.push(div);
    //   div.parent(resultP);
    }
  }
}

function eclidianDistance(ratings1,ratings2) {

  // getting all the pointers from the object users
    var titles = data.titles;
   var sumSquares = 0;



  for (var i =0; i<titles.length;i++){
    var title = titles[i]
    var rating1 = ratings1[title];
    var rating2 = ratings2[title];
    if (rating1 != null && rating2 != null) {
      var diff = rating1 - rating2;
      sumSquares += diff * diff;
    }
  }
  var d = sqrt(sumSquares);

  var similarity = 1/(1+d);

  return similarity;
}