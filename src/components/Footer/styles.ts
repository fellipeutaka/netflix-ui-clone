import styled from "styled-components";

export const Container = styled.footer`
  max-width: 980px;
  margin: 90px auto 0;
  padding: 0 4%;
  color: gray;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  margin-bottom: 8.2px;
`;

export const SocialMediaLink = styled.a`
  margin-right: 15px;
  text-decoration: none;
  color: gray;
`;

export const FooterLinkContainer = styled.ul`
  font-size: 13px;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 0 14px 0;
  padding: 0;
`;

export const FooterLink = styled.li`
  flex: 0 0 50%;
  margin-bottom: 16px;
  list-style: none;
  @media (min-width: 800px) {
    flex-basis: 25%;
  }
  a {
    color: gray;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const ServiceCodeButton = styled.button`
  margin-bottom: 20px;
  font-size: 13px;
  padding: 0.5em;
  color: grey;
  border: solid 1px grey;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
`;

export const CopyrightContainerTop = styled.div`
  margin-bottom: 1rem;
`;

export const CopyrightInstance = styled.span`
  margin-inline: 0.25rem;
`;
