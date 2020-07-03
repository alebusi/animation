var animazioni = ["orizzontale","verticale","rettangolo","bersaglio"];
var ind_anim = 0;
var colori = ["white","orange","#ff3300","#00FFFF","#FF00FF","#00C200","black"];
var ind_col = 0;
var barra = ["vuoto","orizzontale_b","verticale_b","rettangolo_b","lancetta","bersaglio_zoom","satellite"];
var ind_guida = 0;
var dimensioni = ["100px","75px","50px","30px"];
var ind_dim = 0;
var durata = ["4s","8s","14s","24s"];
var ind_dur = -1;

function verTastoPremuto(e) {
  if (e.keyCode == 32) {
      cambioAnimazione();
  } else if (e.keyCode == 37) {
      cambioColore();
  } else if (e.keyCode == 40) {
      cambioGuida();
  } else if (e.keyCode == 39) {
      cambioStile();
  }	
}
		 
function cambioAnimazione() {
  ind_anim+=1;
  if (ind_anim > animazioni.length-1) ind_anim=0;
  document.getElementById("elemento").className=animazioni[ind_anim];
}

function cambioGuida() {
  ind_guida+=1;
  if (ind_guida > barra.length-1) ind_guida=0;
  document.getElementById("elemento2").className=barra[ind_guida];
}

function cambioColore() {
  ind_col+=1;
  if (ind_col > colori.length-1) ind_col=0;
  document.getElementById("elemento").style.backgroundColor = colori[ind_col];
  document.getElementById("elemento").style.borderWidth="0px";
}

function cambioForma() {
  if (document.getElementById("elemento").style.borderRadius == "0px") {
	   document.getElementById("elemento").style.borderRadius = "100px";
  }
  else {
     document.getElementById("elemento").style.borderRadius = "0px";
  }  
}

function cambioStile() {
  if (document.getElementById("elemento").style.backgroundColor != "black") {
    document.getElementById("elemento").style.backgroundColor="black";
    document.getElementById("elemento").style.border="solid 12px "+colori[ind_col];
  }
  else {
    document.getElementById("elemento").style.backgroundColor=colori[ind_col];
    document.getElementById("elemento").style.borderWidth="0px";
  }
}

function cambioDurata() {
  ind_dur+=1;
  if (ind_dur > durata.length-1) ind_dur=0;
  document.getElementById("elemento").style.animationDuration = durata[ind_dur];
}

function cambioDimensione() {
  ind_dim+=1;
  if (ind_dim > dimensioni.length-1) ind_dim=0;
  document.getElementById("elemento").style.width = dimensioni[ind_dim];
  document.getElementById("elemento").style.height = dimensioni[ind_dim];
}
