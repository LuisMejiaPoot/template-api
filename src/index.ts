import express from "express";
import DBConnection from "./connection/connection";
const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", async (req, res) => {
    const object = {
        name: "John",
        age: 30,
        city: "New York"
    };
    const connection   = await new DBConnection();
    connection.connect();
    return res.send(object);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});