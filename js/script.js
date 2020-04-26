function PrikaziVise(radionica, radionicaGumb) {
  var opis = document.getElementById(radionica);
  var gumb = document.getElementById(radionicaGumb);

  if (opis.style.display == "none") {
    opis.style.display = "block";
    gumb.innerHTML = "<em>Prikaži manje</em>";
  } else {
    opis.style.display = "none";
    gumb.innerHTML = "<em>Prikaži više</em>";
  }
}
