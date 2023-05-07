import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";
import { iMovieRepo } from "../interfaces/movies.interfaces";

const ensureMoviesExistsMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie);
  const idParam = parseInt(req.params.id);
  const findMovie = await movieRepository.findOne({ where: { id: idParam } });

  if (!findMovie) {
    throw new AppError("Movie not found", 404);
  }

  return next();
};

export default ensureMoviesExistsMiddleWare;
