import React, { useState } from 'react'
import { Container, Title, ListArea, List, Item, ItemImage, Indicator } from './styles'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

export default function MovieRow({ title, items }) {
    const [marginLeft, setMarginLeft] = useState(0)
    function handleLeftIndicator() {
        const newMargin = marginLeft + Math.round(window.innerWidth / 2)
        setMarginLeft(newMargin > 0 ? 0 : newMargin)
    }
    function handleRightIndicator() {
        let x = marginLeft - Math.round(window.innerWidth / 2)
        const listWidth = items.results.length * 150
        if ((window.innerWidth - listWidth) > x) {
            x = (window.innerWidth - listWidth) - 60
        }
        setMarginLeft(x)
    }

    return (
        <Container>
            <Title>{title}</Title>
            <Indicator style={{ left: 0 }} onClick={handleLeftIndicator}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </Indicator>
            <Indicator style={{ right: 0 }} onClick={handleRightIndicator}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </Indicator>
            <ListArea>
                <List style={{
                    width: items.results.length * 150,
                    marginLeft
                }}>
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