var animazioni = ["orizzontale","orizzontale","verticale","verticale","bersaglio"];
var colori = ["orange","#ff3300","#A1E2FF","#FF7FFF","#00C200","white"];
var barra = ["orizzontale_bv","orizzontale_bo","verticale_bv","verticale_bo","bersaglio_zoom"];
var ind = 0;
var ind_c = 0;

function cambioAnimazione() {
  ind+=1;
  if (ind > animazioni.length-1) ind=0;
  document.getElementById("elemento").className=animazioni[ind];
  document.getElementById("elemento2").className=barra[ind];
}

function cambioColore() {
  ind_c+=1;
  if (ind_c > colori.length-1) ind_c=0;
  document.getElementById("elemento").style.backgroundColor = colori[ind_c];
}
