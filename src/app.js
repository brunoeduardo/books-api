
import express from "express"
import connectToDb from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectToDb();

connection.on("error", (error) => {
    console.error("Connection failed: ", error);
});

connection.once("open", () => {
    console.log("Connection with db successfully");
})

const app = express();
routes(app);

export default app;