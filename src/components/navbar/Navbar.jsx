import { Grid, Typography } from '@mui/material'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function Navbar() {
    return (
        <AnimationOnScroll offset={0} delay={1200} animateOnce={true} animateIn="animate__fadeInLeftBig">
        <Grid container direction="column" className="navbar" justifyContent="center" pt={`3%`}>
            <Grid item container spacing={4} justifyContent="center">
                <Grid item className="options" style={{padding:"16px"}}>
                    <Typography>
                        <a href="">INICIO</a>
                    </Typography>
                </Grid>
                <Grid item className="options" style={{padding:"16px"}}>
                    <Typography>
                        |
                    </Typography>
                </Grid>
                <Grid item className="options" style={{padding:"16px"}}>
                    <Typography>
                        <a href="">LENGUAJES Y HERRAMIENTAS</a>
                    </Typography>
                </Grid>
                <Grid item className="options" style={{padding:"16px"}}>
                    <Typography>
                        |
                    </Typography>
                </Grid>
                <Grid item className="options" style={{padding:"16px"}}>
                    <Typography>
                        <a href="">PROYECTOS</a>
                    </Typography>
                </Grid>
                <Grid item className="options" style={{padding:"16px"}}>
                    <Typography>
                        |
                    </Typography>
                </Grid>
                <Grid item className="options" style={{padding:"16px"}}>
                    <Typography>
                        <a href="">CONTACTO</a>
                    </Typography>
                </Grid>
            </Grid>
            {/* <Grid item>
                <hr />
            </Grid> */}
        </Grid>
        </AnimationOnScroll>
    )
}
