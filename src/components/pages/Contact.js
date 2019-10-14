import  React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';
import grad from '../../assets/images/grad.JPG';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Carlos Hurtado</h2>
                        <Image 
                            src={ grad }
                            alt='Grad Photo of Carlos Hurtado'
                            style={{height: '350px', borderRadius: '15%'}}
                        />
                        <p style={{ margin: 'auto', paddingTop: '1em', width: '75%' }}>
                            I am available for hire and my inbox is always open. Whether for a potential position or just to say hi, I'll try my best to answer your email!
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>

                        <hr />

                        <div className='contact-links'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontFamily: 'Anton', fontSize: '25px' }}>
                                        <i className='fa fa-envelope' aria-hidden='true' />
                                        <a href='mailto:carloshurtado219@gmail.com' style={{color: 'black'}}>carloshurtado219@gmail.com</a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontFamily: 'Anton', fontSize: '25px' }}>
                                        <i className='fa fa-github' aria-hidden='true' />
                                        <a href='https://github.com/carloshurtadogil' style={{color: 'black'}} rel='noopener noreferrer' target='_blank'>
                                            github.com/carloshurtadogil
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontFamily: 'Anton', fontSize: '25px' }}>
                                        <i className='fa fa-linkedin' aria-hidden='true' />
                                        <a href='https://www.linkedin.com/in/carlos-hurtado-046246143/' style={{color: 'black'}}>linkedin.com/in/carlos-hurtado-046246143/</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    };
};

export default Contact;