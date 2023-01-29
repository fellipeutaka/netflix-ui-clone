import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { MovieItem } from "@netflix-ui-clone/@types/MovieItem";

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
    const x = marginLeft - Math.round(window.innerWidth / 2);
    const listWidth = items.results.length * 150;
    if (window.innerWidth - listWidth > x) {
      setMarginLeft(window.innerWidth - listWidth - 60);
    }
    setMarginLeft(x);
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Indicator
        aria-label="Voltar"
        style={{ left: 0 }}
        onClick={handleLeftIndicator}
      >
        <AiOutlineLeft style={{ fontSize: 50 }} />
      </Indicator>
      <Indicator
        aria-label="Avançar"
        style={{ right: 0 }}
        onClick={handleRightIndicator}
      >
        <AiOutlineRight style={{ fontSize: 50 }} />
      </Indicator>
      <ListArea>
        <List
          style={{
            width: items.results.length * 150,
            marginLeft,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, index) => (
              <Item key={index}>
                <ItemImage
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title}
                />
              </Item>
            ))}
        </List>
      </ListArea>
    </Container>
  );
}
