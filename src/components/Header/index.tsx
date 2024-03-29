import { useEffect, useRef } from "react";
import { AiOutlineSearch, AiFillBell, AiFillCaretDown } from "react-icons/ai";

import { Container, Logo, Profile, UserContainer } from "./styles";

export function Header() {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    function toggleHeader() {
      if (!headerRef.current) return;

      if (window.scrollY > 10) {
        headerRef.current.style.backgroundColor = "#141414";
      } else {
        headerRef.current.style.backgroundColor = "transparent";
      }
    }

    window.addEventListener("scroll", toggleHeader);

    return () => {
      window.removeEventListener("scroll", toggleHeader);
    };
  }, []);

  return (
    <Container ref={headerRef}>
      <Logo>
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
        </a>
      </Logo>
      <UserContainer>
        <button aria-label="Pesquisar">
          <AiOutlineSearch size={32} />
        </button>
        <button aria-label="Notificações">
          <AiFillBell size={32} />
        </button>
        <Profile href="/YourAccount">
          <img
            src="https://occ-0-2594-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            alt="Usuário"
          />
          <span>
            <AiFillCaretDown />
          </span>
        </Profile>
      </UserContainer>
    </Container>
  );
}
