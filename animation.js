var stati = ["zero","uno","due","tre","quattro"];
var ind = 0;

function cambio() {
  ind+=1;
  if (ind > stati.length-1) ind=0;
  document.getElementById("elemento").className=stati[ind];
  if (document.getElementById("elemento").className=="quattro")
     {
     document.getElementById("elemento2").className="acceso";
     }
  else
     {
     document.getElementById("elemento2").className="spento";
     }
}
