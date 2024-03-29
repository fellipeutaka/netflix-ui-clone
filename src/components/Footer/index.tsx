import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import {
  Container,
  CopyrightContainer,
  CopyrightContainerTop,
  CopyrightInstance,
  FooterLink,
  FooterLinkContainer,
  ServiceCodeButton,
  SocialMediaContainer,
  SocialMediaLink,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <SocialMediaContainer>
        <SocialMediaLink
          href="https://www.facebook.com/netflixbrasil"
          target="_blank"
          rel="nofollow noopener"
          aria-label="Facebook"
        >
          <FaFacebookSquare size={36} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.instagram.com/NetflixBrasil"
          target="_blank"
          rel="nofollow noopener"
          aria-label="Instagram"
        >
          <FaInstagram size={36} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://twitter.com/NetflixBrasil"
          target="_blank"
          rel="nofollow noopener"
          aria-label="Twitter"
        >
          <FaTwitter size={36} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.youtube.com/user/NetflixBRA"
          target="_blank"
          rel="nofollow noopener"
          aria-label="YouTube"
        >
          <FaYoutube size={36} />
        </SocialMediaLink>
      </SocialMediaContainer>
      <FooterLinkContainer>
        <FooterLink>
          <a href="/browse/subtitles">
            <span>Idioma e legendas</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="/browse/audio-description">
            <span>Áudio descrição</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="https://help.netflix.com/">
            <span>Centro de ajuda</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="/redeem">
            <span>Cartão pré-pago</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="https://media.netflix.com/">
            <span>Imprensa</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="http://ir.netflix.com/">
            <span>Relações com investidores</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="https://jobs.netflix.com/">
            <span>Carreiras</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="https://help.netflix.com/legal/termsofuse">
            <span>Termos de uso</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="https://help.netflix.com/legal/privacy">
            <span>Privacidade</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="https://help.netflix.com/legal/notices">
            <span>Avisos legais</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="/Cookies">
            <span>Preferências de cookies</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="https://help.netflix.com/legal/corpinfo">
            <span>Informações corporativas</span>
          </a>
        </FooterLink>
        <FooterLink>
          <a href="https://help.netflix.com/contactus">
            <span>Entre em contato</span>
          </a>
        </FooterLink>
      </FooterLinkContainer>
      <div>
        <ServiceCodeButton
          onClick={(e) => (e.currentTarget.innerText = "753-740")}
        >
          Código do serviço
        </ServiceCodeButton>
      </div>
      <CopyrightContainer>
        <CopyrightContainerTop>
          <span>© 1997-2021 Netflix, Inc.</span>
          <CopyrightInstance>
            {"{0745f196-3810-4da7-8fbc-4faa5633b1e8}"}
          </CopyrightInstance>
        </CopyrightContainerTop>
        <span>Clone feito por Fellipe Utaka ❤️</span>
      </CopyrightContainer>
    </Container>
  );
}
