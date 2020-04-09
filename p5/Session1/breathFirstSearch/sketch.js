var data;
var graph;
var dropdown;
function preload(){
  data = loadJSON('CC_068_BFS_kevin_bacon.json');
}


function setup() {
  graph = new Graph();
  dropdown = createSelect(); //makes a drop down menue
  dropdown.changed(bfs); //p5 event function
  noCanvas();
  //console.log(data);

  var movies = data.movies;
  for (var i =0; i< movies.length; i++){
    var movie = movies[i].title;
    var cast = movies[i].cast;
    var movieNode = new Node(movie);
    graph.addNode(movieNode);

    for(var j=0; j< cast.length;j++){
      var  actor = cast[j];
      var actorNode = graph.getNode(actor);
      if (actorNode == undefined ){
        var actorNode = new Node(actor);
        dropdown.option(actor);
      }
      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
      //console.log(actor);
    }
  }

}
