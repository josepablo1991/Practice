function bfs(){

  graph.reset();

  var start = graph.setStart(dropdown.value());
  var end =   graph.setEnd("Kevin Bacon");
  console.log(graph);

  var queue = [];

  start.searched = true;
  queue.push(start);

  while(queue.length>0) {
    var current = queue.shift();
    //console.log(current.value);
    if (current == end) {
     console.log('found ' + current.value);
     break;
    }
    var edges  = current.edges;
    for (var i= 0; i< edges.length;i++) {
       var neighbor = edges[i];
       if(!neighbor.searched) { //if the property is false
         neighbor.searched = true;
         neighbor.parent = current;
         queue.push(neighbor);
       }

    }

  }

  var path = [];
  path.push(end);
  var next = end.parent;
  while(next != null) {
     path.push(next);
     next = next.parent;
    }

    var txt = '';
    for(var i =path.length -1; i >= 0; i--) {
      var n = path[i];
      txt += n.value + '---->';
      if (i != 0) {
      txt += ' --> ';
      }
    }
    createP(txt);//This function creates a paragraph function in the browser
}
