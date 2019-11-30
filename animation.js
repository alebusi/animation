var stati = ["zero","uno","due","tre","quattro"];
var ind = 0;

function switch() {
  var className = div.getAttribute("class");
  ind+=1;
  if (ind > stati.length-1) ind=0;
  document.getElementById("elemento").className=stati[ind]);
}
