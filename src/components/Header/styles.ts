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
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-pack: end;
  justify-content: flex-end;
  position: absolute;
  right: 4%;
  top: 0;
  height: 100%;
`;

export const Profile = styled.a`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  span {
    transform: rotate(0deg);
    transition: transform 0.25s ease-in;
  }
  &:hover span {
    transform: rotate(180deg);
  }
`;
