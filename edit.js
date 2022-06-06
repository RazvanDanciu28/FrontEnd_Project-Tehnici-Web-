//----------------------------------------------------------------------------------------------------------------//
//------------------------------------AFISARI IN PAGINA DE HOME---------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
if (document.URL.includes("index.html")){
  //genereaza culoare random
  function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
  }


  function afis_del_despre() {
      var el = document.getElementById("despre");
      var style = window.getComputedStyle(el);

      if (style.display == `none`){
        el.style.display = `block`;
        el.style.color = generateRandomColor(); //la fiecare incarcare se genereaza o culoare noua random
      } 
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

      if (style.display == `none`){
        el.style.display = `block`;
        el.style.color = generateRandomColor(); ////la fiecare incarcare se genereaza o culoare noua random
      }
      else el.style.display = `none`;

  }
}
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//




//----------------------------------------------------------------------------------------------------------------//
//-----------------------------------------REDIRECTIONARI---------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
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
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//




//----------------------------------------------------------------------------------------------------------------//
//-------------------------------------------SISTEM DE LOG IN-----------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
if (document.URL.includes("adopta.html")){
  document.getElementById("buton").style.display = 'block';
  document.getElementById("h1_adopt").style.display = 'block';
  document.getElementById("tranz").style.display = 'inline-flex';
  
  // localStorage.setItem("logat", "false"); //resetul
  var verif = localStorage.getItem("logat");
  if (!verif) localStorage.setItem("logat", "false");
  

  if (verif == "true"){
    var id = null;
    function pleaca() {
      var elem = document.getElementById("pozik");   
      var elem2 = document.getElementById("buton");   
      var pos = 500;
      clearInterval(id);
      id = setInterval(frame, 0.1);
      function frame() {
        if (pos >= 850) {
          clearInterval(id);
          elem.style.display = `none`;
          elem2.style.display = `none`;
          var elem3 = document.getElementById("mss"); 
          elem3.style.display = `block`;
          var elem4 = document.getElementById("chest");
          elem4.style.display = 'block';
          console.log(elem3);
        } 
        else {
          pos+=10; 
      
        elem.style.marginLeft = pos + 'px'; 
          elem2.style.marginLeft = pos + 20 + 'px'; 
        }
      }
    }

    //incarcare valoare din email_cur
    var autEmail_value = localStorage.getItem("email_cur");
    var prenume_key = autEmail_value + "_pr";
    var hello = document.getElementById("salut!");
    hello.innerHTML = "Salut, " + localStorage.getItem(prenume_key) + "!";
    //creare buton de log_out
    var div_log = document.getElementById("mss");
    var log_out = document.createElement("button");
    div_log.appendChild(log_out);
    log_out.innerHTML = "Log Out";
    log_out.addEventListener("click", delog);
    localStorage.setItem("email_cur", autEmail_value);
    function delog(){
      localStorage.setItem("logat", "false");
      window.location.href = "adopta.html";
    }
  }
  else{
    var id = null;
    function pleaca() {
      var elem = document.getElementById("pozik");   
      var elem2 = document.getElementById("buton");   
      var pos = 500;
      clearInterval(id);
      id = setInterval(frame, 0.1);
      function frame() {
        if (pos >= 850) {
          clearInterval(id);
          elem.style.display = `none`;
          elem2.style.display = `none`;
          var elem3 = document.getElementById("chest"); 
          elem3.style.display = `block`;
          var elem4 = document.getElementById("chest_inreg");
          elem4.style.display = 'block';
        } 
        else {
          pos+=10; 
      
        elem.style.marginLeft = pos + 'px'; 
          elem2.style.marginLeft = pos + 20 + 'px'; 
        }
      }
    }


    function ms_inreg(){
      document.getElementById("chest_inreg").style.display = `none`;
      document.getElementById("mss").style.display = `block`;

      //SETAREA DATELOR IN LOCALSTORAGE//
      //imi iau valorile din input
      var name_value = document.getElementById("name").value;
      var prenume_value = document.getElementById("prenume").value;
      var email_value = document.getElementById("email_ad").value;
      var tel_value = document.getElementById("tel").value;
      var pass_value = document.getElementById("parola").value;

      //imi fac cheile pe care le introduc in localStorge
      var name_cheie = email_value + "_n";
      var prenume_cheie = email_value + "_pr";
      var email_cheie = email_value + "_e";
      var tel_cheie = email_value + "_t";
      var pass_cheie = email_value + "_pa";

      //imi bag valorile in localStorage
      localStorage.setItem(name_cheie, name_value);
      localStorage.setItem(prenume_cheie, prenume_value);
      localStorage.setItem(email_cheie, email_value);
      localStorage.setItem(tel_cheie, tel_value);
      localStorage.setItem(pass_cheie, pass_value);

      //afisez mesajul de salut
      var hello = document.getElementById("salut!");
      hello.innerHTML = "Salut, " + localStorage.getItem(prenume_key) + "!";

      //setez pe logat pe true
      localStorage.setItem("logat", "true");
      //creez butonul de log_out
      var div_log = document.getElementById("mss");
      var log_out = document.createElement("button");
      div_log.appendChild(log_out);
      log_out.innerHTML = "Log Out";
      log_out.addEventListener("click", delog);
      localStorage.setItem("email_cur", email_value);
      function delog(){
        localStorage.setItem("logat", "false");
        window.location.href = "adopta.html";
      }
    }

    function ms_aut() {
        document.getElementById("chest_inreg").style.display = `none`;
        document.getElementById("chest_aut").style.display = `block`;
    }
    function verif_aut() {
      var autEmail_value = document.getElementById("email_aut").value;
      var autParola_value = document.getElementById("parola_aut").value;
      var cheieAut_email = autEmail_value + "_pa";
      var ls_parola = localStorage.getItem(cheieAut_email);

      if (autParola_value == ls_parola && ls_parola){
        document.getElementById("chest_aut").style.display = `none`;
        document.getElementById("mss").style.display = 'block';

        var name_key = autEmail_value + "_pr";
        var name_value = localStorage.getItem(name_key);
        var hello = document.getElementById("salut!");
        hello.innerHTML = "Salut, " + name_value + "!";
        localStorage.setItem("logat", "true");
        //creare buton de log_out
        var div_log = document.getElementById("mss");
        var log_out = document.createElement("button");
        div_log.appendChild(log_out);
        log_out.innerHTML = "Log Out";
        log_out.addEventListener("click", delog);
        localStorage.setItem("email_cur", autEmail_value);
        function delog(){
          localStorage.setItem("logat", "false");
          window.location.href = "adopta.html";
        }
      }
      else{
        alert("Date incorecte!");
        localStorage.setItem("logat", "false");
        window.location.href = "adopta.html";
      }
    }
  }
}
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//




//----------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------RECENZII-------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
if (document.URL.includes("index.html")){
  window.onload = function() {
    //verifica daca am aceste chei in localStorage
    var test1 = localStorage.getItem("nr_revs");
    var test3 = localStorage.getItem("nr_tot_revs");
    console.log(test1, test3);
  
    //daca nu gaseste nimic in localStorage, initializeaza valorile de la divurile bagate manual in fisierul html
    if (!test1) localStorage.setItem("nr_revs", 2); //nr_revs se refera la numarul de pagini
    localStorage.setItem("pag_curent", 1); //pag_curent se refera la pagina care este afisata pe site in momentul respectiv
    if (!test3) localStorage.setItem("nr_tot_revs", 5); //nr_tot_revs se refera la numarul de reviews
  
    //crearea recenziilor adaugate manual inainte de un refresh
    var numarRev = Number(test3);
    if (numarRev > 5){
      for (let RevCur = 6; RevCur <= numarRev; RevCur += 1){ //RevCur imi da numarul curent din review
        var mod = Math.trunc(RevCur % 3);
        var numarPagina = Math.trunc(RevCur / 3);
        //stabilire numar pagina in functie de numarul review-ului
        if (mod) numarPagina += 1;
  
        //crearea efectiva
        var vec_rec = document.createElement("div"); //creez divul in care va fi recenzia
        var divVechi_mare = document.getElementById("div_mare_rev");
        divVechi_mare.appendChild(vec_rec);
  
        vec_rec.id = "rev_" + RevCur; //stabilesc id ul
        vec_rec.classList.add('reviews', 'rev_p' + numarPagina); //stabilesc clasele
        console.log('rev_p' + numarPagina);
  
        //imi introduc in recenzie datele luate din localStorage
        var nume_val = localStorage.getItem("rev" + RevCur + "_nume");
        var email_val = localStorage.getItem("rev" + RevCur + "_email");
        var nota_val = localStorage.getItem("rev" + RevCur + "_nota");
        var msj_val = localStorage.getItem("rev" + RevCur + "_msj");
  
        var nume_email_nota_vechi = document.createElement("pre");
        vec_rec.appendChild(nume_email_nota_vechi);
        nume_email_nota_vechi.innerHTML = "Nume: " + nume_val + "\n" + "Email: " + email_val + "\n" + "Nota: " + nota_val + "/10";
         
        var hrv = document.createElement("hr");
        vec_rec.appendChild(hrv);
  
        var mesajv = document.createElement("p");
        vec_rec.appendChild(mesajv);
        mesajv.innerText = msj_val;
  
        vec_rec.style.display = 'none';
      }
    }
  
    //vizualizare recenzii
    var recenzii = document.getElementById("recenzii");
    recenzii.addEventListener("click", afis_del_rec);
    function afis_del_rec(){
        var el = document.getElementById("rec_tot");
        var but_ad = document.getElementById("ad_rec");
        var style = window.getComputedStyle(el);
  
        if (style.display == `none`) el.style.display = `inline-flex`, but_ad.style.display = 'block';
        else el.style.display = but_ad.style.display = `none`;
    }
  
    //sageti
    var st = document.getElementById("st");
    var dr = document.getElementById("dr");
    st.addEventListener("click", muta_stanga);
    dr.addEventListener("click", muta_dreapta);
  
  
    //glisare recenzii
    function muta_stanga(){
      var pag_curent = document.getElementsByClassName("rev_p" + String(localStorage.getItem("pag_curent")));
      var nr_pag = Number(localStorage.getItem("pag_curent"));
      nr_pag -= 1;
      console.log(nr_pag);
      if (nr_pag){
        localStorage.setItem("pag_curent", nr_pag);
        var pag_viit = document.getElementsByClassName("rev_p" + String(localStorage.getItem("pag_curent")));
  
        for (var i = 0; i < pag_curent.length; i++) pag_curent[i].style.display = 'none';
        for (var i = 0; i < pag_viit.length; i++) pag_viit[i].style.display = 'block';
      }
    }
    function muta_dreapta(){
      var pag_curent = document.getElementsByClassName("rev_p" + String(localStorage.getItem("pag_curent")));
      var nr_pag = Number(localStorage.getItem("pag_curent"));
      nr_pag += 1;
      var nr_total_pags = Number(localStorage.getItem("nr_revs"));
      console.log(nr_pag, nr_total_pags);
      if (nr_pag <= nr_total_pags){
        localStorage.setItem("pag_curent", nr_pag);
        var pag_viit = document.getElementsByClassName("rev_p" + String(localStorage.getItem("pag_curent")));
    
        for (var i = 0; i < pag_curent.length; i++) pag_curent[i].style.display = 'none';
        for (var i = 0; i < pag_viit.length; i++) pag_viit[i].style.display = 'block';
      }
    }
  
    //adauga recenzie
    var but_ad = document.getElementById("ad_rec");
    but_ad.addEventListener("click", adauga);
    function adauga(){
      //dispare pagina de recenzii
      var el = document.getElementById("rec_tot");
      var but_ad = document.getElementById("ad_rec");
      el.style.display = but_ad.style.display = `none`;
  
      //apare formularul pentru recenzii
      var form = document.getElementById("adauga_recenzie");
      form.style.display = 'block';
    }
  
  
    //CREARE RECENZIE
    var but_send = document.getElementById("send");
    window.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        creare();
      }
    });
    but_send.addEventListener("click", creare);
    function creare(){
      var name_value = document.getElementById("nume").value;
      var email_value = document.getElementById("email").value;
      var nota_value = document.getElementById("nota").value;
      var msj_value = document.getElementById("msj").value;
          
            
      if (!name_value || !email_value || !nota_value || !msj_value) alert("Completeaza toate campurile!");
      else{
        var new_rec = document.createElement("div"); //creez divul in care va fi recenzia
        var div_mare = document.getElementById("div_mare_rev");
        console.log(div_mare);
        div_mare.appendChild(new_rec);
        
        //stabilesc al catalea review este si actualizez in localStorage
        var nr_rev = Number(localStorage.getItem("nr_tot_revs"));
        nr_rev += 1;
        console.log(nr_rev);
        localStorage.setItem("nr_tot_revs", nr_rev);
  
        //setez valorile in localStorage pentru a le incarca in pagina la refresh
        localStorage.setItem("rev" + nr_rev + "_nume", name_value);
        localStorage.setItem("rev" + nr_rev + "_email", email_value);
        localStorage.setItem("rev" + nr_rev + "_nota", nota_value);
        localStorage.setItem("rev" + nr_rev + "_msj", msj_value);
  
        new_rec.id = "rev_" + nr_rev; //stabilesc id ul
  
        //stabilesc pe a cata pagina va fi nou review
        var set_nrPag = nr_rev % 3;
        if (set_nrPag != 1){ //daca set_nrPag e mai mare decat 1, noul review ramane pe pagina curenta
          var nrPag = localStorage.getItem("nr_revs");
          new_rec.classList.add('reviews', 'rev_p' + nrPag);
  
          new_rec.style.display = 'none';
        }
        else{
          //TREBUIE FACUT CAZUL CU 1 => CREEZI O NOUA PAGINA
          var nrPag = Number(localStorage.getItem("nr_revs"));
          nrPag += 1;
          nrPag = String(nrPag);
          localStorage.setItem("nr_revs", nrPag);
          new_rec.classList.add('reviews', 'rev_p' + nrPag);
  
           new_rec.style.display = 'none';
        }
        
        //imi introduc in recenzie datele luate din inputul formularului
        // var name_value = document.getElementById("nume").value;
        // var email_value = document.getElementById("email").value;
        // var nota_value = document.getElementById("nota").value;
        // var msj_value = document.getElementById("msj").value;
        var nume_email_nota = document.createElement("pre");
        new_rec.appendChild(nume_email_nota);
        nume_email_nota.innerHTML = "Nume: " + name_value + "\n" + "Email: " + email_value + "\n" + "Nota: " + nota_value + "/10";
         
        var hr = document.createElement("hr");
        new_rec.appendChild(hr);
  
        var mesaj = document.createElement("p");
        new_rec.appendChild(mesaj);
        mesaj.innerText = msj_value;
  
        var form = document.getElementById("adauga_recenzie");
        form.style.display = 'none';
      }
    }
  }
}
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//




//----------------------------------------------------------------------------------------------------------------//
//--------------------------------------COUNTDOWN PENTRU OFERTE---------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
if (document.URL.includes("oferte.html")){
  var count1 = new Date("Jun 24, 2022 00:00:00").getTime();
  var count2 = new Date("Jul 06, 2022 00:00:00").getTime();
  var count3 = new Date("Jun 27, 2022 00:00:00").getTime();
  var count4 = new Date("Jun 28, 2022 00:00:00").getTime();
  var count5 = new Date("Jun 30, 2022 00:00:00").getTime();

  var ded1 = document.createElement("p");
  var ded2 = document.createElement("p");
  var ded3 = document.createElement("p");
  var ded4 = document.createElement("p");
  var ded5 = document.createElement("p");

  var div1 = document.getElementById("of1");
  var div2 = document.getElementById("of2");
  var div3 = document.getElementById("of3");
  var div4 = document.getElementById("of4");
  var div5 = document.getElementById("of5");

  div1.appendChild(ded1);
  div2.appendChild(ded2);
  div3.appendChild(ded3);
  div4.appendChild(ded4);
  div5.appendChild(ded5);

  ded1.style.marginLeft = "28%";
  ded2.style.marginLeft = "28%";
  ded3.style.marginLeft = "28%";
  ded4.style.marginLeft = "28%";
  ded5.style.marginLeft = "28%";

  ded1.style.fontSize = "2vw";
  ded2.style.fontSize = "2vw";
  ded3.style.fontSize = "2vw";
  ded4.style.fontSize = "2vw";
  ded5.style.fontSize = "2vw";

  ded1.style.color = "red";
  ded2.style.color = "red";
  ded3.style.color = "red";
  ded4.style.color = "red";
  ded5.style.color = "red";

  var x = setInterval(function() {

    // data de azi
    var now = new Date().getTime();
      
    // distante dintre countdown si data de acum
    var dist1 = count1 - now;
    var dist2 = count2 - now;
    var dist3 = count3 - now;
    var dist4 = count4 - now;
    var dist5 = count5 - now;
      
    // calcul pentru zile, ore, minute si secunde ramase
    var days1 = Math.floor(dist1 / (1000 * 60 * 60 * 24));
    var hours1 = Math.floor((dist1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes1 = Math.floor((dist1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds1 = Math.floor((dist1 % (1000 * 60)) / 1000);

    var days2 = Math.floor(dist2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((dist2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((dist2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((dist2 % (1000 * 60)) / 1000);

    var days3 = Math.floor(dist3 / (1000 * 60 * 60 * 24));
    var hours3 = Math.floor((dist3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes3 = Math.floor((dist3 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds3 = Math.floor((dist3 % (1000 * 60)) / 1000);

    var days4 = Math.floor(dist4 / (1000 * 60 * 60 * 24));
    var hours4 = Math.floor((dist4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes4 = Math.floor((dist4 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds4 = Math.floor((dist4 % (1000 * 60)) / 1000);

    var days5 = Math.floor(dist5 / (1000 * 60 * 60 * 24));
    var hours5 = Math.floor((dist5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes5 = Math.floor((dist5 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds5 = Math.floor((dist5 % (1000 * 60)) / 1000);

    ded1.innerHTML = "Oferta valabila inca: " + days1 + " zile, " + hours1 + " ore, " + minutes1 + " minute, " + seconds1 + " secunde ";
    ded2.innerHTML = "Oferta valabila inca: " + days2 + " zile, " + hours2 + " ore, " + minutes2 + " minute, " + seconds2 + " secunde ";
    ded3.innerHTML = "Oferta valabila inca: " +days3 + " zile, " + hours3 + " ore, " + minutes3 + " minute, " + seconds3 + " secunde ";
    ded4.innerHTML = "Oferta valabila inca: " + days4 + " zile, " + hours4 + " ore, " + minutes4 + " minute, " + seconds4 + " secunde ";
    ded5.innerHTML = "Oferta valabila inca: " + days5 + " zile, " + hours5 + " ore, " + minutes5 + " minute, " + seconds5 + " secunde ";


  }, 1000);
}
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//





