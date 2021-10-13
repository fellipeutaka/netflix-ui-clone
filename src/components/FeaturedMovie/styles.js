import styled from "styled-components"

export const Section = styled.section`
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.imagePath});
`;

export const Vertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const Horizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 0 150px 30px;
`;

export const Name = styled.h1`
    font-size: 60px;
    font-weight: bold;
`;

export const Info = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
    span {
        margin-right: 15px;
    }
`;

export const Points = styled.span`
    color: #46d369;
`;

export const Description = styled.p`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;
    overflow: hidden;
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 5; // Quantidade de linhas
    -webkit-box-orient: vertical;
`;

export const BtnContainer = styled.div`
    margin-top: 15px;
    button {
        font-size: 20px;
        font-weight: bold;
        padding: 12px 25px;
        border-radius: 5px;
        margin-right: 10px;
        border: none;
        cursor: pointer;
        opacity: 1;
        transition: opacity ease .2s;
    }
    button:hover {
        opacity: 0.7;
    }
    button:nth-child(2) {
        background-color: #333;
        color: #fff;
    }
`;

export const Genres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;
`;
