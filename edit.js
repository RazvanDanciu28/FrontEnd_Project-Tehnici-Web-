function afis_del_despre() {
    var el = document.getElementById("despre");
    var style = window.getComputedStyle(el);

    if (style.display == `none`) el.style.display = `block`;
    else el.style.display = `none`;

}

