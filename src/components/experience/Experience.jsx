import { Grid, SvgIcon } from '@mui/material'
import React, { useContext } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { LanguageContext } from '../../helpers/LanguageContext'

export default function Experience() {
    const [spanish] = useContext(LanguageContext)

    return (
        <Grid container direction="column" className='projects section experience' xs={12} p={`5%`} id='projects'>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
                <h1>{spanish ? 'Experiencia' : 'Experience'}</h1>
            </AnimationOnScroll>
            <Grid item container xs={12}>
                {/* <Grid item className='gif' xs={5}>
                    <img src="https://media4.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif?cid=ecf05e476x6754wdy29k3ubzcjwozgahalpevbcvml02a7xv&rid=giphy.gif&ct=g" width="480" height="270" ></img >
                </Grid> */}
                <Grid item xs={12} className='cardProjectContainer'>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig">
                        <Grid item container direction="row" justifyContent="flex-start" alignItems="center" className='cardProject'>
                            <Grid item p={`2%`} xs={12} className='cardDescription'>
                                <Grid item>
                                    <h3>FULLSTACK DEVELOPER</h3>
                                    <h4>Vates</h4>
                                    <p>2022 - {spanish ? 'Actualidad' : 'Present'}</p>
                                    <p className='descriptionExperience'>{spanish ? 'Como desarrollador Full Stack en Vates, he desempeñado un papel clave en el desarrollo y mantenimiento de diversas aplicaciones, trabajando en el frontend con tecnologías como React JS, Next JS y Redux, y en el backend con Python, FastAPI y SQLAlchemy, integrando SQLServer. Implementé Material-UI para una experiencia de usuario consistente. Colaboré estrechamente con el equipo, cumplí con plazos y contribuí a mejoras continuas, convirtiéndome en un desarrollador versátil capaz de abordar desafíos complejos en el desarrollo de aplicaciones.' : 'As a Full Stack Developer at Vates, I have played a key role in the development and maintenance of various applications, working on the frontend with technologies such as React JS, Next JS, and Redux, and on the backend with Python, FastAPI, and SQLAlchemy, integrating SQLServer. I implemented Material-UI for a consistent user experience. I collaborated closely with the team, met deadlines, and contributed to continuous improvements, becoming a versatile developer capable of tackling complex challenges in application development.'}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </AnimationOnScroll>
                    {/* <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
                        <Grid item container direction="row" justifyContent="flex-start" alignItems="center" className='cardProject'>
                            <Grid item p={`2%`} xs={12} className='cardDescription'>
                                <Grid item>
                                    <h3>FULLSTACK DEVELOPER</h3>
                                    <h4>Vates</h4>
                                    <p>2022 - Actualidad</p>
                                    <p className='descriptionExperience'>{spanish ? 'Como desarrollador Full Stack en Vates, he desempeñado un papel clave en el desarrollo y mantenimiento de diversas aplicaciones, trabajando en el frontend con tecnologías como React JS, Next JS y Redux, y en el backend con Python, FastAPI y SQLAlchemy, integrando SQLServer. Implementé Material-UI para una experiencia de usuario consistente. Colaboré estrechamente con el equipo, cumplí con plazos y contribuí a mejoras continuas, convirtiéndome en un desarrollador versátil capaz de abordar desafíos complejos en el desarrollo de aplicaciones.' : 'As a Full Stack Developer at Vates, I have played a key role in the development and maintenance of various applications, working on the frontend with technologies such as React JS, Next JS, and Redux, and on the backend with Python, FastAPI, and SQLAlchemy, integrating SQLServer. I implemented Material-UI for a consistent user experience. I collaborated closely with the team, met deadlines, and contributed to continuous improvements, becoming a versatile developer capable of tackling complex challenges in application development.'}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </AnimationOnScroll> */}
                </Grid>
            </Grid>
        </Grid>
    )
}