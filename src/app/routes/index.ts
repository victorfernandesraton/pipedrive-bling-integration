import { Router } from "express";
import DealRoutes from "./DealRoutes";

const route = Router();

route.use("/deal", DealRoutes);

export default route;
