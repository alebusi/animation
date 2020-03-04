var animazioni = ["orizzontale","orizzontale","orizzontale","orizzontale","verticale","verticale","verticale","verticale","bersaglio","rettangolo","pianeta"];
var colori = ["orange","#ff3300","#00FFFF","#FF00FF","#00C200","black","white"];
var barra = ["orizzontale_bv","orizzontale_bo","verticale_bv","rettangolo_b","verticale_bo","verticale_bv","orizzontale_bo","rettangolo_b","bersaglio_zoom","rettangolo_b","satellite"];
var ind = 0;
var ind_c = 0;
var valoreOpacity = 0;

function verTastoPremuto(e) {
  if (e.keyCode == 32) {
      cambioAnimazione();
  } else if (e.keyCode == 37) {
      cambioColore();
  } else if (e.keyCode == 40) {
      cambioForma();
  } else if (e.keyCode == 39) {
      cambioOpac();
  }	
}
		 
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

function cambioForma() {
  if (document.getElementById("elemento").style.borderRadius == "0px") {
	 document.getElementById("elemento").style.borderRadius = "100px";
  }
  else {
         document.getElementById("elemento").style.borderRadius = "0px";
  }
  if (document.getElementById("elemento").className == "bersaglio") {
      if (document.getElementById("elemento").style.borderRadius == "0px") {
	 document.getElementById("elemento2").style.borderRadius = "0px"; 
      }
      else {
	 document.getElementById("elemento2").style.borderRadius = "70vh";
      }
  }  
}

function cambioOpac() {
  if (valoreOpacity == 0) {
    valoreOpacity = 1;
  }
  else {
    valoreOpacity = 0;  
  }
  document.getElementById("elemento2").style.opacity = valoreOpacity;
}
