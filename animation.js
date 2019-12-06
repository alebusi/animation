var stati = ["zero","uno","due","tre","quattro"];
var colori = ["white","orange","#ff3300","#A1E2FF","#FF7FFF","#00C200"];
var ind, ind_c = 0;

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

function colore() {
  ind_c+=1;
  if (ind_c > colori.length-1) ind_c=0;
  document.getElementById("elemento").style.backgroundColor = colori[ind_c];
}
