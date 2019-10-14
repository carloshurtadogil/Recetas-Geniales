import  React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Cell, Grid } from 'react-mdl';
import { MDBContainer, MDBFooter } from 'mdbreact';

import portrait from '../../assets/images/portrait.jpeg';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%',  margin: 'auto', display: 'flex' }} className='landing-div'>
                <Grid className='landing-grid'>
                    
                    <Cell col={12}>
                        <Image 
                            src={ portrait }
                            alt='Portrait of Carlos Hurtado'
                            className='avatar-img'
                            roundedCircle
                        />

                        <div className='banner-text'>
                            <h1>Software Developer</h1>

                            <hr />

                            <p>Solution-oriented Computer Scientist seeking a software developer position. </p>

                            <div className='social-links'>

                                {/** LinkedIn */}
                                <a href='https://linkedin.com/in/carlos-hurtado-046246143/' rel='noopener noreferrer' target='_blank'>
                                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                                </a>

                                {/** Github */}
                                <a href='https://github.com/carloshurtadogil' rel='noopener noreferrer' target='_blank'>
                                    <i className='fa fa-github-square' aria-hidden='true' />
                                </a>

                                {/** Email */}
                                <a href='mailto: carloshurtado219@gmail.com' rel='noopener noreferrer' target='_blank'>
                                    <i className='fa fa-envelope-square' aria-hidden='true' />
                                </a>
                            </div>
                        </div>
                        
                        <div >
                            <MDBFooter className="font-small pt-4 mt-4">
                                <div className="footer text-center py-3">
                                    <MDBContainer fluid>
                                        Designed &#38; Built by Carlos Hurtado
                                    </MDBContainer>
                                </div>
                            </MDBFooter>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    };
};

export default LandingPage;