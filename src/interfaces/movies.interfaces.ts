import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Movie } from "../entities";
import {
  movieCreateSchema,
  movieCreateReturnSchema,
  returnMultipleMoviesSchema,
  movieUpdateSchema,
  moviePaginationSchema,
  sortSchema,
} from "../schemas/movies.schemas";

type iMovieCreate = z.infer<typeof movieCreateSchema>;
type iMovieUpdate = DeepPartial<Movie>;
type iMovieRepo = Repository<Movie>;

type iMovieCreateReturn = z.infer<typeof movieCreateReturnSchema>;
type iMoviesMultipleReturn = z.infer<typeof returnMultipleMoviesSchema>;
type iMovieUpdateRequest = z.infer<typeof movieUpdateSchema>;
type iSort = z.infer<typeof sortSchema>;
type IMoviePagination = z.infer<typeof moviePaginationSchema>;

export {
  iMovieCreate,
  iMovieUpdate,
  iMovieRepo,
  iMovieCreateReturn,
  iMoviesMultipleReturn,
  iMovieUpdateRequest,
  IMoviePagination,
  iSort,
};
