import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesLoading, selectMovies } from "../popularMoviesSlice";
import { Genre } from "./Genre";
import {
  DescriptionWrapper,
  Subtitle,
  ImageWrapper,
  TileWrapper,
  Rate,
  RatingWrapper,
  Star,
  Title,
  Votes,
} from "./styled";
import { imagesBaseUrl } from "../../../ApiPaths";
import { fetchGenres } from "./Genre/genreSlice";

export const MovieTile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesLoading());
    dispatch(fetchGenres());
  }, [dispatch]);

  const movies = useSelector(selectMovies);

  return (
    <>
      {movies.map(
        ({
          id,
          title,
          poster_path,
          vote_average,
          vote_count,
          release_date,
          genre_ids,
        }) => (
          <TileWrapper key={id} id={id}>
            <ImageWrapper
              src={`${imagesBaseUrl}/w500${poster_path}`}
              alt=""
            ></ImageWrapper>
            <DescriptionWrapper>
              <Title>{title}</Title>
              <Subtitle>{new Date(release_date).getFullYear()}</Subtitle>
              <Genre genre_ids={genre_ids} />
              <RatingWrapper>
                <Star />
                <Rate>{vote_average}</Rate>
                <Votes>{vote_count} votes</Votes>
              </RatingWrapper>
            </DescriptionWrapper>
          </TileWrapper>
        )
      )}
    </>
  );
};
