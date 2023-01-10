import { Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { LanguageContext } from '../../helpers/LanguageContext'
import { NavbarFixedContext } from '../../helpers/NavbarFixedContext'

export default function Navbar() {
    const [spanish] = useContext(LanguageContext)
    const [active, setActive] = useState("aboutMe")
    const [fixedNavBar, setFixedNavbar, initialNavbarPosition, setInitialNavbarPosition] = useContext(NavbarFixedContext)
    const [scrollTop, setScrollTop] = useState(0)

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
        // let pixelsFromTop = window.scrollY;
        // let documentHeight = document.body.clientHeight;
        // let windowHeight = window.innerHeight;
        // let difference = documentHeight - windowHeight;
        // let percentage = (100 * pixelsFromTop) / difference;
        // document.getElementById("bar").style.width = `${percentage}%`;

        const sections = document.querySelectorAll(".section");
        const navLinks = document.querySelectorAll(".link");

        navLinks.forEach((link) => {
            const id = link.getAttribute("id")
            if (id !== active + 'Link') {
                link.classList.remove("active")
            }
        })

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY > (sectionTop - 250)) {
                setActive(section.getAttribute("id"))
            }
        })

        if (window.scrollY > (initialNavbarPosition)) {
            setFixedNavbar(true)
        }
        else {
            setFixedNavbar(false)
        }
    };


    useEffect(() => {

        // if (window.screen.width >= 768) {
        //     setBigScreen(true)
        // } else setBigScreen(false)
        const navbar = document.querySelector(".navbarAnimation");
        setInitialNavbarPosition(navbar.offsetTop)

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [initialNavbarPosition])


    return (

        <AnimationOnScroll offset={0} delay={1200} animateOnce={true} animateIn="animate__fadeInLeftBig" className='navbarAnimation' style={fixedNavBar ? { position: 'fixed', top: '0' } : {}}>
            <Grid container direction="column" className="navbar" justifyContent="center" pt={`1%`}>
                <Grid item container spacing={`0.5%`} justifyContent="center">
                    <Grid item className="options" style={{ padding: "1.171vw" }}>
                        <Typography>
                            <a href="#aboutMe" className={"link"} style={active === 'aboutMe' ? { color: '#e55554' } : {}} id='aboutMeLink'>{spanish ? 'SOBRE MI' : 'ABOUT ME'}</a>
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "1.171vw" }}>
                        <Typography>
                            |
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "1.171vw" }}>
                        <Typography>
                            <a href="#skills" className={"link"} style={active === 'skills' ? { color: '#e55554' } : {}} id='skillsLink'>{spanish ? 'LENGUAJES Y HERRAMIENTAS' : 'SKILLS'}</a>
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "1.171vw" }}>
                        <Typography>
                            |
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "1.171vw" }}>
                        <Typography>
                            <a href="#projects" className={"link"} style={active === 'projects' ? { color: '#e55554' } : {}} id='projectsLink'>{spanish ? 'PROYECTOS' : 'PROJECTS'}</a>
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "1.171vw" }}>
                        <Typography>
                            |
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "1.171vw" }}>
                        <Typography>
                            <a href="#contact" className={"link"} style={active === 'contact' ? { color: '#e55554' } : {}} id='contactLink'>{spanish ? 'CONTACTO' : 'CONTACT'}</a>
                        </Typography>
                    </Grid>
                </Grid>
                {/* <Grid item>
                <hr />
            </Grid> */}
                <div className='progressMainWrapper'>
                    <div className='progressMainStyle' style={{ width: `${scrollTop}%` }}></div>
                </div>
            </Grid>
        </AnimationOnScroll>
    )
}
