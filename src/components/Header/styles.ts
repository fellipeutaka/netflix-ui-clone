import styled from "styled-components";

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
  transition: all 0.5s ease;
`;

export const Logo = styled.div`
  height: 25px;
  img {
    height: 100%;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  position: absolute;
  right: 4%;
  top: 0;
  height: 100%;

  button {
    background-color: transparent;
    border: none;
    color: white;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

export const Profile = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  span {
    color: white;
    transform: rotate(0deg);
    transition: transform 0.25s ease-in;
  }
  &:hover span {
    transform: rotate(180deg);
  }
`;
