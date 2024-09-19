/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["Mi profesor", "Mi Perro", "Mi Vecina", "Mi Pajaro"];
  let action = ["comio", "volo", "rompio", "corrio"];
  let what = ["mis deberes", "mi silla", "mi comida", "mis plantas"];
  let when = ["en la mañana", "en la tarde", "en mi almuerzo", "mientras leia"];
  // modifique la funcion  por una arrowfunction .
  const datoAletorio = _numeroAletorio => Math.floor(Math.random() * 4);

  const button = document.getElementById("excuse");
  console.log(button);
  let imagenes = [
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT0aLDuz8pUXubb3gIjwruAMi2MDLXORETBtyL7ynA11cYRiQTD",
    "https://img.freepik.com/vector-premium/profesor-dibujos-animados-amigable-accesible-pie-confianza-frente-pizarra_851674-43572.jpg",
    "https://images.ecestaticos.com/Dhoy07oiDzN3tY3j3D8PbJLNMQs=/2x33:912x510/600x315/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F785%2Fb13%2F19a%2F785b1319a06ec83322ad9947b2c455fd.jpg",
    "https://static.wikia.nocookie.net/doblaje/images/a/ac/Woodywoodpecker201802.png/revision/latest?cb=20190720165708&path-prefix=es"
  ];

  let creandoImagen = document.createElement("img");
  creandoImagen.classList = "image";
  button.addEventListener("click", event => {
    event.preventDefault();
    let etiquetaP = document.querySelector(".etiqueta-p");
    console.log(etiquetaP);
    let concatenando = [
      who[datoAletorio()],
      action[datoAletorio()],
      what[datoAletorio()],
      when[datoAletorio()]
    ];

    let imagenAleatoria = imagenes[datoAletorio()];

    creandoImagen.src = imagenAleatoria;
    let container = document.querySelector(".container");
    container.appendChild(creandoImagen);

    etiquetaP.innerHTML = `${concatenando.join(" ")}`;
  });
};
