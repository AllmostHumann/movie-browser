import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { BigTile } from "../../../common/BigTile";
import { SectionTitle } from "../../../common/SectionTitle";
import { MovieTile } from "../../movies/MovieTile";
import { ContentContainer, Wrapper } from "./styled";
import { StyledLink } from "../PeopleList/styled";
import {
  fetchPersonPageLoading,
  selectCast,
  selectCrew,
  selectPerson,
  selectPersonPageStatus,
} from "./personPageSlice";
import { fetchGenres } from "../../movies/MovieTile/Genre/genreSlice";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";
import { searchQueryParamName } from "../../../useQueryParameter";

export const PersonPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const person = useSelector(selectPerson);
  const stateOfLoading = useSelector(selectPersonPageStatus);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get(searchQueryParamName);

  useEffect(() => {
    dispatch(fetchPersonPageLoading(id));
    dispatch(fetchGenres());
    if (query) {
      navigate(`/people?${searchQueryParamName}=${query}`);
    }
  }, [dispatch, id, query, navigate]);
  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loading />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <Wrapper>
          {person.map(
            ({
              profile_path,
              name,
              birthday,
              place_of_birth,
              biography,
              id,
            }) => (
              <BigTile
                title={name}
                profile_path={profile_path}
                article={biography}
                place_of_birth={place_of_birth}
                birthday={birthday}
                key={id}
              />
            )
          )}

          {cast && cast.length > 0 && (
            <>
              <SectionTitle detailsPage>
                Movies - cast {`(`}
                {cast.length}
                {`)`}
              </SectionTitle>
              <ContentContainer>
                {cast.map(
                  ({
                    poster_path,
                    id,
                    credit_id,
                    title,
                    character,
                    release_date,
                    vote_average,
                    vote_count,
                    genre_ids,
                  }) => (
                    <li key={credit_id}>
                      <StyledLink to={`/movies/${id}`}>
                        <MovieTile
                          key={credit_id}
                          id={id}
                          title={title}
                          vote_average={vote_average}
                          vote_count={vote_count}
                          poster_path={poster_path}
                          genre_ids={genre_ids}
                          character={character}
                          year={release_date}
                        />
                      </StyledLink>
                    </li>
                  )
                )}
              </ContentContainer>
            </>
          )}

          {crew && crew.length > 0 && (
            <>
              <SectionTitle>
                Movies - crew {`(`}
                {crew.length}
                {`)`}
              </SectionTitle>
              <ContentContainer>
                {crew.map(
                  ({
                    job,
                    title,
                    vote_average,
                    vote_count,
                    release_date,
                    poster_path,
                    id,
                    credit_id,
                    genre_ids,
                  }) => (
                    <li key={credit_id}>
                      <StyledLink to={`/movies/${id}`}>
                        <MovieTile
                          key={credit_id}
                          id={id}
                          title={title}
                          vote_average={vote_average}
                          vote_count={vote_count}
                          job={job}
                          year={release_date}
                          poster_path={poster_path}
                          genre_ids={genre_ids}
                        />
                      </StyledLink>
                    </li>
                  )
                )}
              </ContentContainer>
            </>
          )}
        </Wrapper>
      )}
    </>
  );
};
