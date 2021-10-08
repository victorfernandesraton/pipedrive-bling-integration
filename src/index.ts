import Http from "http";
import App from "./app";

const Server = Http.createServer(App);

Server.listen(process.env.PORT || 8000);
