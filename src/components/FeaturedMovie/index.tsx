import type { MovieInfo } from "@netflix-ui-clone/@types/MovieInfo";

import { RenderIf } from "../utils/RenderIf";
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

  return (
    <Section
      imagePath={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
    >
      <Vertical>
        <Horizontal>
          <Name>{item.original_name}</Name>
          <Info>
            <Points>{item.vote_average} pontos</Points>
            <RenderIf condition={Boolean(firstDate.getFullYear())}>
              <span className="year">{firstDate.getFullYear()}</span>
            </RenderIf>
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
          <RenderIf condition={item.genres.length > 0}>
            <Genres>
              <strong>Gêneros:</strong>{" "}
              {item.genres.map((genre) => genre.name).join(", ")}
            </Genres>
          </RenderIf>
        </Horizontal>
      </Vertical>
    </Section>
  );
}
