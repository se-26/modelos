const express = require("express");

const app = express();

app.use(express.json());

const pqrsRoutes = require("./src/routes/pqrsRoutes");

app.use("/pqrs", pqrsRoutes);

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor ejecutándose en http://192.168.1.68:${PORT}`);
});