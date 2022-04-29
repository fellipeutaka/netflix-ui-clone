import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
  &:hover button {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  margin: 0 0 0 30px;
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const List = styled.div`
  transition: margin-left ease 0.5s;
`;

export const Item = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
`;

export const ItemImage = styled.img`
  width: 100%;
  transform: scale(0.9);
  transition: transform ease 0.2s;
  &:hover {
    transform: scale(1);
  }
`;

export const Indicator = styled.button`
  position: absolute;
  width: 40px;
  height: 225px;
  color: #fff;
  transition: opacity 0.3s ease;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  border: none;
  outline: none;
  @media (max-width: 768px) {
    opacity: 1;
  }
`;
