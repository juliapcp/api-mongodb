import express from "express";
import weatherRoute from "./routes/routes.js";
import cors from "cors";
import database from "./config/database.js";
import mongoose from "mongoose";
import ServerApiVersion from "mongodb"


const app = express();
mongoose.connect(database.uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(cors());
app.use(express.json());
app.use("/weather", weatherRoute);

app.listen(5000, () => console.log('Server listening on port 5000'));
