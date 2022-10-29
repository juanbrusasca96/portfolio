import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function Navbar() {
    const [active, setActive] = useState("aboutMe")
    const [fixedNavBar, setFixedNavbar] = useState(false)
    const [initialNavbarPosition, setInitialNavbarPosition]=useState();
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

        if(window.scrollY>(initialNavbarPosition)){
            setFixedNavbar(true)
        }
        else{
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
            <Grid container direction="column" className="navbar" justifyContent="center" pt={`3%`}>
                <Grid item container spacing={4} justifyContent="center">
                    <Grid item className="options" style={{ padding: "16px" }}>
                        <Typography>
                            <a href="#aboutMe" className={"link"} style={active==='aboutMe'?{color:'#ff013c'}:{}} id='aboutMeLink'>SOBRE MI</a>
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "16px" }}>
                        <Typography>
                            |
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "16px" }}>
                        <Typography>
                            <a href="#skills" className={"link"} style={active==='skills'?{color:'#ff013c'}:{}} id='skillsLink'>LENGUAJES Y HERRAMIENTAS</a>
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "16px" }}>
                        <Typography>
                            |
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "16px" }}>
                        <Typography>
                            <a href="#projects" className={"link"} style={active==='projects'?{color:'#ff013c'}:{}} id='projectsLink'>PROYECTOS</a>
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "16px" }}>
                        <Typography>
                            |
                        </Typography>
                    </Grid>
                    <Grid item className="options" style={{ padding: "16px" }}>
                        <Typography>
                            <a href="#contact" className={"link"} style={active==='contact'?{color:'#ff013c'}:{}} id='contactLink'>CONTACTO</a>
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
