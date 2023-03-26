import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { MovieItem } from "@/@types/MovieItem";

import {
  Container,
  Indicator,
  Item,
  ItemImage,
  List,
  ListArea,
  Title,
} from "./styles";

type MovieRowProps = {
  title: string;
  items: MovieItem;
};

export function MovieRow({ title, items }: MovieRowProps) {
  const [marginLeft, setMarginLeft] = useState(0);

  function handleLeftIndicator() {
    const newMargin = marginLeft + Math.round(window.innerWidth / 2);
    setMarginLeft(newMargin > 0 ? 0 : newMargin);
  }

  function handleRightIndicator() {
    const newMargin = marginLeft - Math.round(window.innerWidth / 2);
    const movieWidth = 150;
    const listWidth = items.results.length * movieWidth;

    if (window.innerWidth - listWidth > newMargin) {
      setMarginLeft(window.innerWidth - listWidth - 60);
    } else {
      setMarginLeft(newMargin);
    }
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Indicator
        aria-label="Voltar"
        style={{ left: 0 }}
        onClick={handleLeftIndicator}
      >
        <AiOutlineLeft size={48} />
      </Indicator>
      <Indicator
        aria-label="Avançar"
        style={{ right: 0 }}
        onClick={handleRightIndicator}
      >
        <AiOutlineRight size={48} />
      </Indicator>
      <ListArea>
        <List
          style={{
            width: items.results.length * 150,
            marginLeft,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item) => {
              if (!item.poster_path) {
                return null;
              }

              return (
                <Item key={item.id}>
                  <ItemImage
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.title || item.original_title}
                  />
                </Item>
              );
            })}
        </List>
      </ListArea>
    </Container>
  );
}
