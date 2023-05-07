import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  readAllMoviesController,
  updatedMovieController,
} from "../controllers/movies.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  movieCreateSchema,
  movieUpdateSchema,
} from "../schemas/movies.schemas";
import ensureNameDontExistsMiddleware from "../middlewares/ensureNameDontExist.middleware";
import ensureMoviesExistsMiddleWare from "../middlewares/ensureMoviesExists.middleware";

const moviesRoutes: Router = Router();

moviesRoutes.post(
  "",
  ensureDataIsValidMiddleware(movieCreateSchema),
  ensureNameDontExistsMiddleware,
  createMovieController
);

moviesRoutes.get("", readAllMoviesController);
moviesRoutes.delete(
  "/:id",
  ensureMoviesExistsMiddleWare,
  deleteMovieController
);
moviesRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(movieUpdateSchema),
  ensureMoviesExistsMiddleWare,
  ensureNameDontExistsMiddleware,
  updatedMovieController
);

export default moviesRoutes;
