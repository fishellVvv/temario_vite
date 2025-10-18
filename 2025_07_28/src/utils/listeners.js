import programmingLanguages from "./data";
import Card from "../components/Card/Card";

const themeBtnAction = () => {
  document.querySelector("#themeBtn").addEventListener("click", (ev) => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
      ev.target.textContent = "🌑";
    } else {
      ev.target.textContent = "☀️";
    }
  });
};

const renderMainContent = () => {
  const container = document.querySelector("#mainContainer");

  programmingLanguages.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${Card(element)}
    `;
    container.appendChild(li);
  });
};

const addListeners = () => {
  themeBtnAction();
  renderMainContent();
};

export default addListeners;
