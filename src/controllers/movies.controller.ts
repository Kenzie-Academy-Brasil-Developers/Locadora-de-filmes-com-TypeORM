import { Request, Response } from "express";
import {
  iMovieCreate,
  iMovieUpdate,
  iMoviesMultipleReturn,
} from "../interfaces/movies.interfaces";
import createMovieService from "../services/createMovie.service";
import { sortSchema } from "../schemas/movies.schemas";
import readAllMoviesService from "../services/readAllMovies.service";
import updatedMovieService from "../services/updatedMovie.service";
import deleteMovieService from "../services/deleteMovie.service";

const createMovieController = async (req: Request, res: Response) => {
  const movieData: iMovieCreate = req.body;

  const newMovie = await createMovieService(movieData);

  res.status(201).json(newMovie);
};

const readAllMoviesController = async (
  req: Request,
  res: Response
): Promise<Response<iMoviesMultipleReturn>> => {
  const { page, perPage, order, sort } = req.query;
  const newSort = sortSchema.parse(sort);

  const movies = await readAllMoviesService(page, perPage, order, newSort);

  return res.json(movies);
};

const deleteMovieController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const idParam = parseInt(request.params.id);

  await deleteMovieService(idParam);

  return response.status(204).send();
};

const updatedMovieController = async (req: Request, res: Response) => {
  const requestData: iMovieUpdate = req.body;
  const idParam: number = parseInt(req.params.id);

  const movie = await updatedMovieService(requestData, idParam);

  return res.json(movie);
};

export {
  createMovieController,
  readAllMoviesController,
  deleteMovieController,
  updatedMovieController,
};
