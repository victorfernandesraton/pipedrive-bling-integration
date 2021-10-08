import Express, { Errback, NextFunction, Request, Response } from "express";
import ExpressAsyncHandler from "express-async-handler";

const App = Express();

App.use(Express.json());
App.use(Express.urlencoded({ extended: false }));
App.use(ExpressAsyncHandler);

App.get("/helth", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({
      data: "OK",
    });
  } catch (error) {
    next(error);
  }
});

App.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Page Not Found" });
});

App.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: "Internal Error" });
});

export default App;
