
import express from "express";
import {createServer} from 'node:http';

import { mongoose } from "mongoose";
import cors from "cors"
import { connectToSocket } from "./src/controller/socketManager.js";
import router from "./src/routes/users.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use('/', router)


const start = async () => {

    async function main() {
  await mongoose.connect(process.env.MONGODB_URL); // mongodb connection
    }
    server.listen(process.env.PORT, () => {
        console.log("LISTENIN ON PORT:",process.env.PORT)
    });

  main()
  .then(()=> console.log('mongodb connect succeful'))
  .catch((err)=> console.log(err))

}

start()