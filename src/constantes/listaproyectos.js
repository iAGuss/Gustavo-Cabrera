import pokedexImg from "../assets/proyectos/pokedex.jpg";
import nexosImg from "../assets/proyectos/nexos.jpg";
import tareasImg from "../assets/proyectos/tareas.jpg";
import rickAndMortyImg from "../assets/proyectos/rickandmorty.jpg";

const proyectos = [
  {
    name: "Pokedex con base de datos",
    imagen: pokedexImg,

    postgreSQL:
      "https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png",

    descripcion:
      "Proyecto final cuenta con base de datos con opcion de login/Register si estas registrado cuentas con la posibilidad de poder borrar y crear el pokemon a tu gusto ademas tiene filtrado number/name",
    GitHub: "https://github.com/iAGuss/Pokedex-Proyecto_Final",
  },

  {
    name: "Pagina Nexos",
    imagen: nexosImg,

    descripcion: "Maquetacion para la empresa Nexos ",
    GitHub: "https://github.com/iAGuss/Projecto-html_css_js-pasado-a-react",
  },

  {
    name: "Lista de tareas",
    imagen: tareasImg,

    descripcion:
      "Creacion de lista de tareas segun que importancia debas hacer tu tarea ademas de poder borrar las tareas ya completadas",
    GitHub: "https://github.com/iAGuss/lista-de-tareas",
  },

  {
    name: "Rick and Morty",
    imagen: rickAndMortyImg,
    descripcion:
      "Consumo de la API de Rick and Morty, ademas de uso de paginacion y Bootstrap",
    GitHub: "https://iaguss.github.io/Api-Rick-and-Morty/",
  },
];
export default proyectos;
