import Http from "http";
import App from "./app";

const Server = Http.createServer(App);

const PORT = process.env.PORT || 8000;

Server.on("listening", () => {
  console.info(`server runing in ${PORT}`);
  console.info(`Press CTRL + C to KILL`);
});

Server.listen(PORT);
