import styled from "styled-components"

export const Container = styled.header`
    height: 70px;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    transition: all .5s ease;
`;

export const Logo = styled.div`
    height: 25px;
    img {
        height: 100%;
    }
`;