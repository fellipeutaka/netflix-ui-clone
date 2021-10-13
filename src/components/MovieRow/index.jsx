import React from 'react'
import { Container, Title, ListArea, List, Item, ItemImage } from './styles'

export default function MovieRow({ title, items }) {
    return (
        <Container>
            <Title>{title}</Title>
            <ListArea>
                <List>
                    {items.results.length > 0 && items.results.map((item, index) => (
                        <Item key={index}>
                            <ItemImage src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </Item>
                    ))}
                </List>

            </ListArea>
        </Container>
    )
}