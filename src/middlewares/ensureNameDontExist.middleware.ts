import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";
import { iMovieRepo } from "../interfaces/movies.interfaces";

const ensureNameDontExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie);
  const nameMovie = req.body.name;
  if (nameMovie) {
    const findName = await movieRepository.exist({
      where: { name: nameMovie },
    });

    if (findName) {
      throw new AppError("Movie already exists.", 409);
    }
  }
  return next();
};

export default ensureNameDontExistsMiddleware;
