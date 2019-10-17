import  React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Cell, Grid } from 'react-mdl';

import amsterdam from '../../assets/images/amsterdam.JPG';

class LandingPage extends Component {
    render() {

        return (
            <div style={{ width: '100%',  margin: 'auto', display: 'flex' }} className='landing-div'>
                <Grid className='landing-grid'>
                    
                    <Cell col={12}>
                        <Grid style={{ justifyContent: 'center' }}>
                            <Cell col={3}>
                                <Image 
                                    src={ amsterdam }
                                    alt='Portrait of Carlos Hurtado'
                                    className='avatar-img'
                                    roundedCircle
                                />
                            </Cell>
                        </Grid>

                        <div className='banner-text'>
                            <h1>Software Developer</h1>

                            <hr />

                            <p>Solution-oriented Computer Scientist seeking a software developer position. </p>

                            <div className='social-links'>
                                <Grid style={{ justifyContent: 'center' }}>
                                    <Cell col={4}>
                                        {/** LinkedIn */}
                                        <a href='https://linkedin.com/in/carlos-hurtado-046246143/' rel='noopener noreferrer' target='_blank'>
                                            <i className='fa fa-linkedin-square' aria-hidden='true' />
                                        </a>

                                    </Cell>

                                    <Cell col={4}>
                                        {/** Github */}
                                        <a href='https://github.com/carloshurtadogil' rel='noopener noreferrer' target='_blank'>
                                            <i className='fa fa-github-square' aria-hidden='true' />
                                        </a>
                                    </Cell>

                                    <Cell col={4}>
                                        {/** Email */}
                                        <a href='mailto: carloshurtado219@gmail.com' rel='noopener noreferrer' target='_blank'>
                                            <i className='fa fa-envelope-square' aria-hidden='true' />
                                        </a>
                                    </Cell>
                                </Grid>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    };
};

export default LandingPage;