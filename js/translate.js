console.log("hola");
/* Definiendo variables  */
let a = document.querySelector(".main__hero__title");
let b = document.querySelector(".main__hero__paragraph");
let c = document.querySelector("#idiomaFocus");
let d = document.querySelector("#main__edad");
let e = document.querySelector("#main__años");
let f = document.querySelector("#main__ingles");
let g = document.querySelector("#main__discord__text");
let h = document.querySelector(".main__projects__text");
let i = document.querySelector("#main__music__text");

function cambiarIdiomaIngles() {
  // c.style.clipPath = "inset(0 0 0 0)";
  if (c.textContent !== "EN") {
    a.style.opacity = 0;
    b.style.opacity = 0;
    c.style.opacity = 0;
    d.style.opacity = 0;
    e.style.opacity = 0;
    f.style.opacity = 0;
    g.style.opacity = 0;
    h.style.opacity = 0;
    i.style.opacity = 0;
    setTimeout(function () {
      a.innerHTML = "Hello I'm Said Uceda";
      b.innerHTML =
        "Industrial Engineer with more than 4 years of experience. I implement technology to companies. I invite you to check my social networks and get to know my work.";
      c.style.color = "yellow";
      c.innerHTML = "EN";
      d.innerHTML = "YEARS";
      e.innerHTML = "OLD";
      f.innerHTML = "LEVEL OF ENGLISH";
      g.innerHTML = "Online";
      h.innerHTML = "I DON'T NEED ABSOLUTE POSITION!";
      i.innerHTML = "I LISTEN TO VARIOUS GENRES OF MUSIC";
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;
      f.style.opacity = 1;
      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
    }, 500);
  }
}

function cambiarIdiomaEspañol() {
  console.log(c.textContent);
  a.innerHTML = "Hola, soy Said Uceda";
  b.innerHTML =
    " Ingeniero Industrial con más de 4 años de experiencia. Implemento tecnología a las empresas. Te invito a que revises mis redes sociales y conozcas mi trabajo.";
  c.style.color = "yellow";
  // c.style.clipPath = "inset(0 0 0 0)";

  if (c.textContent !== "ES") {
    a.style.opacity = 0;
    b.style.opacity = 0;
    c.style.opacity = 0;
    d.style.opacity = 0;
    e.style.opacity = 0;
    f.style.opacity = 0;
    g.style.opacity = 0;
    h.style.opacity = 0;
    i.style.opacity = 0;
    setTimeout(function () {
      c.innerHTML = "ES";
      d.innerHTML = "EDAD";
      e.innerHTML = "AÑOS";
      f.innerHTML = "NIVEL DE INGLES";
      g.innerHTML = "En linea";
      h.innerHTML = "¡NO NECESITO POSICION ABSOLUTA!";
      i.innerHTML = "ESCUCHO VARIOS GENEROS DE MUSICA";
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;
      f.style.opacity = 1;
      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      c.style.opacity = 1;
    }, 500);
  }
}
