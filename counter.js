var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
/*var success = new Audio('success.wav');*/

function selezionaRisorsa(div) {
  var suona = new Audio('campo.mp3');
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
  suona.play();
}

function aggiornaRisorsa(numero) {
  var suona = new Audio('campo.mp3');
  var x = document.getElementsByClassName("risorsa_sel");
  if (x.length > 0) {
    if (x[0].innerHTML == "-" || numero == "0") {
      k=0;
    }
    else {
      k=parseInt(x[0].innerHTML);
    }
    k+=numero;
    if (k == 0) {
      x[0].innerHTML = "-";
    }
    else {
      x[0].innerHTML=k;
    }
    suona.play();
  }
}

function aggRisorse(id,i,ind) {
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
  var suona = new Audio('campo.mp3');
  if (document.getElementById("controllo").className=="standard") { 
    if (className=="spazio") {
      div.className = "campo";
      suona.play();
      }
    else if (className=="campo") {
      div.className = "grano_3";
      suona.play();
      }
    else if (className=="grano_3") {
      div.className = "grano_2";
      suona.play();
      }
    else if (className=="grano_2") {
      div.className = "grano_1";
            suona.play();
      }
    else if (className=="grano_1") {
      div.className = "ortaggio_2";
            suona.play();
      }
    else if (className=="ortaggio_2") {
      div.className = "ortaggio_1";
            suona.play();
      }
    else if (className=="ortaggio_1") {
      div.className = "spazio";
      suona.play();
      }
  }
  else if (document.getElementById("controllo").className=="edilizia") {
    if (className=="spazio") {
      div.className = "stanza";
      suona.play();
      }
    else if (className=="stanza") {
      div.className = "stalla";
      suona.play();
      } 
    else if (className=="stalla") {
      div.className = "stanza_argilla";
      suona.play();
      }
    else if (className=="stanza_argilla") {
      div.className = "stanza_pietra";
      suona.play();
      }
    else if (className=="stanza_pietra") {
      div.className = "spazio";
      suona.play();
      }
  }
}

function mysel(div) {
  var suona = new Audio('campo.mp3');
  var className = div.getAttribute("class");
  if (document.getElementById("controllo").className=="steccati") {
    if (className=="largo") {
       div.className = "largo_nero";
       }
    else if (className=="largo_nero") {
       div.className = "largo";
       }
    suona.play();
    }
}

function mySwitch(div) {
  var suona = new Audio('campo.mp3');
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
  suona.play();
}
