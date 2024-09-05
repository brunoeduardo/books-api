import "dotenv/config"
import app from "./src/app.js";

const PORT = 3000;


const server = app.get((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end(routes[req.url])
})

app.listen(PORT, () => {
    console.log("Listening")
})
