import "./style.css";

const $app = document.getElementById("app");

fetch("http://localhost:3000/api")
  .then((e) => e.json())
  .then((listTasks) => {
    listTasks.forEach((tasks) => {
      $app.innerHTML += `
        <span><b>${tasks.title}</b></span> <span><b>${tasks.description}</b></span>
        `;
    });
  });
