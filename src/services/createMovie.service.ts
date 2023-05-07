import {
  iMovieCreate,
  iMovieCreateReturn,
  iMovieRepo,
} from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { movieCreateReturnSchema } from "../schemas/movies.schemas";

const createMovieService = async (
  movieData: iMovieCreate
): Promise<iMovieCreateReturn> => {
  const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie);

  const movie = movieRepository.create(movieData);
  await movieRepository.save(movie);

  const newMovie: iMovieCreateReturn = movieCreateReturnSchema.parse(movie);

  return newMovie;
};

export default createMovieService;
