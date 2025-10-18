import "./style.css";
import Header from "./components/Header/header";
import Avatar from "./components/Avatar/Avatar,js";

document.querySelector("#app").innerHTML = `
${Header("Vite Components")}
${Avatar("Goro Majima")}
${Avatar(
  "Kazuma Kyriu",
  "https://cdn.costumewall.com/wp-content/uploads/2018/10/kazuma-kirya.jpg"
)}
${Avatar("Spider-man")}
${Avatar(
  "Cloud",
  "https://easycdn.es/1/imagenes/final-fantasy-vii-remake-playstation-5-ps4_339617.jpg"
)}
`;
