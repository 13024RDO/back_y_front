import mysql from "mysql2/promise";

const db = async () => {
  try {
    const conex = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "db_tasks",
    });
    console.log("Conexión exitosa");
    return conex;
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    throw error;
  }
};
export { db };
