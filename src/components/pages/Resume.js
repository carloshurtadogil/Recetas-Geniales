import  React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Cell, Grid } from 'react-mdl';
import Education from '../items/Education';
import Experience from '../items/Experience';
import Skills from '../items/Skills';

import portrait from '../../assets/images/portrait.jpeg';

/**Resume component that will outline all details from education, experience, etc. */
class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center', paddingTop: '30px' }}>
                            <img 
                                src={ portrait }
                                alt='Carlos Hurtado'
                                style={{ height: '400px', borderRadius: '25%' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Carlos Hurtado</h2>
                        <h4 style={{ color: 'grey' }}>Software Developer</h4>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                        <p>I am a Computer Science graduate from California State University, Long Beach. I love programming, traveling, video games, and going to the gym. As a software developer, I enjoy learning new technologies, building new things, and my passion for creating software solutions to today's problems.</p>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                        <h5>Email</h5>
                        <Link to='mailto:carloshurtado219@gmail.com'>carloshurtado219@gmail.com</Link>

                        <h5>Web</h5>
                        <Link to='https://carlos-hurtado.com'>carlos-hurtado.com</Link>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        
                    </Cell>

                    <Cell col={8} className='resume-right-col'>
                        <h2>Education</h2>

                        <Education 
                            degree='B.S. Computer Science'
                            start='August 2015'
                            end='May 2019'
                            schoolName='California State University, Long Beach'
                            schoolDescription='Software Engineering, Object-Oriented Programming, Data Structures and Algorithms, Calculus, Discrete Mathematics, Linear Algebra, Physics, Database Fundamentals, Computer Architecture'
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience 
                            start='September 2017'
                            end='June 2019'
                            jobName='Siemens PLM Software'
                            title='Lead IT Intern'
                            description='siemens'
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        
                        <h2>Key Skills</h2>

                        <Skills/>
                    </Cell>
                </Grid>
            </div>
        );
    };
};

export default Resume;