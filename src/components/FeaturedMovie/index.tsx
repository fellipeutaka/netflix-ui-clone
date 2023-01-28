import { MovieInfo } from "@netflix-ui-clone/@types/MovieInfo";
import {
  BtnContainer,
  Description,
  Genres,
  Horizontal,
  Info,
  Name,
  Points,
  Section,
  Vertical,
} from "./styles";

type FeaturedMovieProps = {
  item: MovieInfo;
};

export function FeaturedMovie({ item }: FeaturedMovieProps) {
  const firstDate = new Date(item.first_air_date);
  function getGenres() {
    const genres = [];
    for (let i in item.genres) {
      genres.push(item.genres[i].name);
    }
    return genres.join(", ");
  }
  return (
    <Section
      imagePath={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
    >
      <Vertical>
        <Horizontal>
          <Name>{item.original_name}</Name>
          <Info>
            <Points>{item.vote_average} pontos</Points>
            <span className="year">{firstDate.getFullYear()}</span>
            <span className="seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 && "s"}
            </span>
          </Info>
          <Description>{item.overview}</Description>
          <BtnContainer>
            <button>► Assistir</button>
            <button>+ Minha lista</button>
          </BtnContainer>
          <Genres>
            <strong>Gêneros:</strong> {getGenres()}
          </Genres>
        </Horizontal>
      </Vertical>
    </Section>
  );
}
