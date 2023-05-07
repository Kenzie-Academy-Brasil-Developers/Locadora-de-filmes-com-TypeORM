import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  iMovieRepo,
  iMovieUpdate,
  iMovieUpdateRequest,
} from "../interfaces/movies.interfaces";
import { movieUpdateSchema } from "../schemas/movies.schemas";

const updatedMovieService = async (
  updateData: iMovieUpdate,
  idParam: number
): Promise<iMovieUpdateRequest> => {
  const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie);
  const movieToUpdate = await movieRepository.findOneBy({
    id: idParam,
  });

  const movie = movieRepository.create({
    ...movieToUpdate,
    ...updateData,
  });

  await movieRepository.save(movie);

  const updateMovie = movieUpdateSchema.parse(movie);

  return updateMovie;
};

export default updatedMovieService;
