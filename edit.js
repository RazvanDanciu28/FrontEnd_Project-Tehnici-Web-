function afis_del_despre() {
    var el = document.getElementById("despre");
    var style = window.getComputedStyle(el);

    if (style.display == `none`) el.style.display = `block`;
    else el.style.display = `none`;

}

function afis_del_caini() {
    var el = document.getElementById("caini");
    var style = window.getComputedStyle(el);

    if (style.display == `none`) el.style.display = `grid`;
    else el.style.display = `none`;

}

function afis_del_intr() {
    var el = document.getElementById("intrebari");
    var style = window.getComputedStyle(el);

    if (style.display == `none`) el.style.display = `grid`;
    else el.style.display = `none`;

}

function go_home() {
    window.location.href = "index.html";
}

function go_contact() {
    window.location.href = "contact.html";
}

function go_adopta() {
    window.location.href = "adopta.html";
}

function go_oferte() {
    window.location.href = "oferte.html";
}

var id = null;
function pleaca() {
  var elem = document.getElementById("pozik");   
  var elem2 = document.getElementById("buton");   
  var pos = 500;
  clearInterval(id);
  id = setInterval(frame, 0.1);
  function frame() {
    if (pos >= 950) {
      clearInterval(id);
      elem.style.display = `none`;
      elem2.style.display = `none`;
    } 
    else {
      pos+=10; 
    
      elem.style.marginLeft = pos + 'px'; 
      elem2.style.marginLeft = pos + 20 + 'px'; 
    }
  }

  var elem3 = document.getElementById("chest"); 
  elem3.style.display = `block`;

}

function ms() {
    document.getElementById("chest_inreg").style.display = `none`;
    document.getElementById("mss").style.display = `block`;
}