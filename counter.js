var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var audioCampo = new Audio('campo.mp3');

var audioTogliRisorsa = new Audio('togli.mp3');
var audioAggiungiRisorsa = new Audio('success.wav');

var audioPecora = new Audio('pecora.mp3');
var audioCinghiale = new Audio('cinghiale.mp3');
var audioBestiame = new Audio('bestiame.mp3');

function selezionaRisorsa(div) {
  var className = div.getAttribute("class");
  var x = document.getElementsByClassName("risorsa_sel");
  if (x.length > 0) {
     x[0].className = "risorsa";
  }
  if (className=="risorsa") {
      div.className = "risorsa_sel";
       }
  else if (className == "risorsa_sel") {
       div.className = "risorsa";
       }
  campoAudio.play();
}

function aggiornaRisorsa(numero) {
  var x = document.getElementsByClassName("risorsa_sel");
  if (x.length > 0) {
    if (x[0].innerHTML == "-" || numero == "0") {
      k=0;
    }
    else {
      k=parseInt(x[0].innerHTML);
    }
    k+=numero;
    if (k === 0) {
      x[0].innerHTML = "-";
    }
    else {
      x[0].innerHTML=k;
    }
    if (numero > 0) {
      audioAggiungiRisorsa.play();
    }
    else {
      audioTogliRisorsa.play();
    }
  }
}

function OldaggRisorse(id,i,ind) {
  var x = document.getElementsByClassName("example");
  tess[ind]+=i;
  v=tess[ind];
  if (v === 0) {
    document.getElementById(id).innerHTML = "-";
  }
  else { 
    document.getElementById(id).innerHTML = v;
  }
  if (i == 1) {
    if ( id == "pecora" ) {
       var aumenta = new Audio('pecora.mp3');
       }
    else if ( id == "cinghiale" ) {
       var aumenta = new Audio('cinghiale.mp3');
       }
    else if ( id == "bestiame" ) {
       var aumenta = new Audio('mucca.mp3');
       }
    else {
       var aumenta = new Audio('success.wav');
       }
    aumenta.play();
    }
  else {
    var decrementa = new Audio('togli.mp3');
    decrementa.play();
    }
  }

function myfunc2(div) {
  var className = div.getAttribute("class");
  if (document.getElementById("controllo").className=="standard") { 
    if (className=="spazio") {
      div.className = "campo";
      }
    else if (className=="campo") {
      div.className = "grano_3";
      }
    else if (className=="grano_3") {
      div.className = "grano_2";
      }
    else if (className=="grano_2") {
      div.className = "grano_1";
      }
    else if (className=="grano_1") {
      div.className = "ortaggio_2";
      }
    else if (className=="ortaggio_2") {
      div.className = "ortaggio_1";
      }
    else if (className=="ortaggio_1") {
      div.className = "spazio";
      }
  }
  else if (document.getElementById("controllo").className=="edilizia") {
    if (className=="spazio") {
      div.className = "stanza";
      }
    else if (className=="stanza") {
      div.className = "stalla";
      } 
    else if (className=="stalla") {
      div.className = "stanza_argilla";
      }
    else if (className=="stanza_argilla") {
      div.className = "stanza_pietra";
      }
    else if (className=="stanza_pietra") {
      div.className = "spazio";
      }
  }
  audioCampo.play();
}

function mysel(div) {
  var className = div.getAttribute("class");
  if (document.getElementById("controllo").className=="steccati") {
    if (className=="largo") {
       div.className = "largo_nero";
       }
    else if (className=="largo_nero") {
       div.className = "largo";
       }
    audioCampo.play();
    }
}

function mySwitch(div) {
  var className = div.getAttribute("class");
  if (className=="standard") {
    div.className = "steccati";
    }
  else if (className=="steccati") {
    div.className = "edilizia";
    }
  else if (className=="edilizia") {
    div.className = "standard";
    }
  audioCampo.play();
}
