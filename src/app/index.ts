import Express, {
  Errback,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import "express-async-errors";
const App = Express();

export default function start(route: Router): any {
  App.use(Express.json({ strict: true }));
  App.use(Express.urlencoded({ extended: true }));

  App.use(route);

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
    return res.status(err?.code ?? 500).json({
      message: err?.message,
      stackTrace:
        process.env.NODE_ENV === "development" ? err?.stack : undefined,
    });
  });

  return App;
}
