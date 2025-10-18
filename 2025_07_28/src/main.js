import "./style.css";
import { Header, Main, Footer } from "./components";
import addListeners from "./utils/listeners";

const init = () => {
  document.body.innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  init();
  addListeners();
});
