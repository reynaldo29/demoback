import { Router } from "express";
import * as Controller from "./controller"

const peopleRouter = Router();

peopleRouter.route("/people").get(Controller.findAll);
peopleRouter.route("/people").post(Controller.create);
peopleRouter.route("/people/delete/:id").delete(Controller.remove);
peopleRouter.route("/people/update/:id").put(Controller.update);

export default peopleRouter;