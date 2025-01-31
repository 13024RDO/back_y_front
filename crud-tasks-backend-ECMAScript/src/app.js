import express from "express";
import cors from "cors";
import { tasksRouters } from "./routes/tasks.routes.js";

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//rutas de usuarios

app.use("/api/", tasksRouters);

app.listen(3000, () => {
  console.log("El servidor esta corriendo en la ruta http://localhost:3000");
});
