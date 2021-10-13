import React, { useEffect } from 'react'
import {
    Container,
    Logo
} from './styles'

export default function Header() {
    useEffect(() => {
        function toggleHeader() {
            if (window.scrollY > 10) {
                document.querySelector("header").style.backgroundColor = "#141414";
            } else {
                document.querySelector("header").style.background = "transparent";
            }
        }
        window.addEventListener("scroll", toggleHeader)
        return () => {
            window.removeEventListener("scroll", toggleHeader)
        }
    }, [])
    return (
        <Container>
            <Logo>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" alt="Netflix" />
                </a>
            </Logo>
            <div className="user">
                <a href="/">
                    <img src="https://occ-0-2594-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41" alt="Usuário" />
                </a>
            </div>
        </Container>
    )
}