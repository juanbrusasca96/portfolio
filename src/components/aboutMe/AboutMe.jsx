import { Avatar, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { LanguageContext } from '../../helpers/LanguageContext';
import avatar from '../../images/avatar.jpg'

export default function AboutMe() {
    const [spanish, setSpanish] = useContext(LanguageContext)
    const contentSpanish = ["Bienvenido/a", 'console.log("Bienvenido/a")', 'res.send("Bienvenido/a")', 'System.out.println("Bienvenido/a")', 'cout<<"Bienvenido/a"']
    const contentEnglish = ["Welcome", 'console.log("Welcome")', 'res.send("Welcome")', 'System.out.println("Welcome")', 'cout<<"Welcome"']
    const content = spanish ? contentSpanish : contentEnglish
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            index === content.length - 1 ? setIndex(0) : setIndex(index + 1);
        }, 3000);
        return () => clearInterval(intervalID);
    }, [index])

    return (
        <Grid container direction="column" alignItems="center" className='aboutMe section' id='aboutMe'>
            <Grid item container justifyContent="flex-end" className='switch'>
                <label class="rocker rocker-small">
                    <input type="checkbox" onClick={() => setSpanish(!spanish)} />
                    <span class="switch-left">EN</span>
                    <span class="switch-right">ES</span>
                </label>
            </Grid>
            <div className="loader">
                <div className="scanner">
                    <h1 key={index} contentCss={content[index]}>{content[index]}</h1>
                </div>
            </div>
            <Grid item container xs={12} mt={`1%`}>
                <Grid item container justifyContent="center" alignItems="center" xs={2}>
                    {/* <Avatar src={avatar} sx={{ width: 64, height: 64 }} className='name' />
                    <Typography className='name'>
                        Hola, soy <span>Juan</span>
                    </Typography> */}
                    <AnimationOnScroll offset={0} delay={300} animateOnce={true} animateIn="animate__fadeInLeftBig">
                        <div className="card">
                            <div className="img">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(236,240,241,1)"></path></svg> */}
                                <Avatar src={avatar}  className='name' />
                            </div>
                            <h1>{spanish ? 'Hola, soy ' : 'Hi, i am '} <span className='myName'>Juan</span></h1>
                            <h5>HOVER ME!</h5>
                            <p>
                                <a href="https://www.linkedin.com/in/juanbrusasca/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill='white' />
                                    </svg>
                                </a>
                                <a href="https://github.com/juanbrusasca96" target="_blank">
                                    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                                        <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" fill="white"></path>
                                    </svg>
                                </a>
                            </p>
                        </div>
                        <AnimationOnScroll offset={0} delay={500} animateOnce={true} animateIn="animate__fadeInLeftBig">
                            {/* <Grid item container justifyContent="center" className='scroll'>
                            <div class="container_mouse">
                                <span class="mouse-btn">
                                    <span class="mouse-scroll"></span>
                                </span>
                                <h3>Scroll Down</h3>
                            </div>
                        </Grid> */}
                        </AnimationOnScroll>
                    </AnimationOnScroll>
                </Grid>
                <Grid item container direction="column" justifyContent="center" alignItems="center" xs={10}>
                    <Grid item>
                        <AnimationOnScroll offset={0} animateOnce={true} animateIn="animate__fadeInLeftBig">
                            {/* <Typography className='text'>
                                Soy desarrollador fullstack. Soy un apasionado de la programación y de la lógica. Disfruto estar sentado programando, incluso durante largas horas cuando me trabo con algo. Y ni hablar de la hermosa sensación que me genera cuando ese programa sale andando como quiero. Soy un fiel creyente del trabajo duro, la perseverancia y el nunca rendirse, y considero que esto se complementa bien con mi gusto por programar. Soy estudiante de Licenciatura en Ciencias de la Computación en la Universidad Nacional de Córdoba.
                            </Typography> */}
                            <div className="container">
                                <div className="container_terminal"></div>
                                <div className="terminal_toolbar">
                                    <div className="butt">
                                        <button className="btn btn-color"></button>
                                        <button className="btn"></button>
                                        <button className="btn"></button>
                                    </div>
                                    <p className="user">juanbrusasca@admin: ~</p>
                                </div>
                                <div className="terminal_body">
                                    <div className="terminal_promt">
                                        <span className="terminal_user">juanbrusasca@admin:</span>
                                        <span className="terminal_location">~</span>
                                        <span className="terminal_bling">{spanish ? '$ Full Stack Developer con formación como Diseñador Web. Experiencia trabajando en NodeJS, React, Redux, SQL entre otras tecnologías del sector. Con pensamiento creativo, resolución de problemas, trabajo en equipo, comunicación y autonomía. Soy un apasionado de la programación y de la lógica. Disfruto estar sentado programando, incluso durante largas horas cuando me trabo con algo. Amo la sensación que me genera cuando ese programa sale andando como quiero. Soy un fiel creyente del trabajo duro y el nunca rendirse, y considero que esto se complementa bien con mi gusto por programar.' : "$ Full Stack Developer with a background as a Web Designer. Experience working in NodeJS, React, Redux, SQL among other technologies in the industry. With creative thinking, problem solving, teamwork, communication and autonomy. I am passionate about programming and logic. I enjoy programming, even for long hours when I get stuck with something. I love the beautiful feeling I get when that program works the way I want it to. I am a believer in hard work and never giving up, and I think this complements well with my love for programming."}<span className="terminal_cursor"></span></span>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </Grid>
                    <Grid item container justifyContent="center">
                        <Grid item container className='download'>
                            <AnimationOnScroll offset={0} delay={800} animateOnce={true} animateIn="animate__fadeInRightBig">
                                <button> <a href={spanish ? require(`../../files/CVBrusascaJuan(ES).pdf`) : require(`../../files/CVBrusascaJuan(EN).pdf`)} download={spanish ? 'CV - Brusasca Juan (ES)' : 'CV - Brusasca Juan (EN)'}>{spanish ? 'DESCARGAR CV' : 'DOWNLOAD CV'}</a>
                                </button>
                            </AnimationOnScroll>
                        </Grid>
                        {/* <Grid item container className='download'>
                            <AnimationOnScroll offset={0} delay={800} animateOnce={true} animateIn="animate__fadeInRightBig">
                                <button> {spanish ? 'DESCARGAR CV (EN)' : 'DOWNLOAD CV (EN)'}
                                </button>
                            </AnimationOnScroll>
                        </Grid> */}

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
