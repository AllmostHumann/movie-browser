import { Container } from "../../../common/Container";
import { MovieList } from "./styled";
import { SectionTitle } from "../../../common/SectionTitle/styled";
import { MovieTile } from "../MovieTile";

const PopularMovies = () => {
  return (
    <Container>
      <section>
        <SectionTitle>Popular Movies</SectionTitle>
        <MovieList>
          <MovieTile />
        </MovieList>
      </section>
    </Container>
  );
};

export default PopularMovies;
