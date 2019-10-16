import  React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Grid, Cell } from 'react-mdl';

/**All Volunesia Screenshots*/
import vmain from '../../assets/images/volunesia/v-main.png';
import vhome from '../../assets/images/volunesia/v-home.png';
import vprofile from '../../assets/images/volunesia/v-profile.png';
import vevent from '../../assets/images/volunesia/v-event.png';
import vsign from '../../assets/images/volunesia/v-sign.png';

/**All Traqueur Screenshots*/
import tsign from '../../assets/images/traqueur/t-sign.png';


//Component to showcase most recent and proudest accomplishments
class Projects extends Component {
    render() {
        return (
            <div>
                {/** VOLUNESIA */}
                <div style={{ backgroundColor: '#fff3e6', width: '100%', margin: 'auto', paddingTop:'1em', paddingBottom: '2em' }}>
                    <Grid className='project-grid'>
                        <Cell col={4}>
                            <Image src={vsign} alt='Volunesia' style={{width: '100%'}}/>
                        </Cell>
                    </Grid>

                    <Grid className='project-grid'>
                        <Cell col={12}>
                            <div className='banner-text'>
                                <article style={{fontSize: '10'}}>
                                    A group project for my senior software engineering course inspired by our 
                                    collective appreciation of the charitable work done by a group member.
                                    Volunesia is a mobile platform designed to connect prospective volunteers
                                    with nonprofit organizations for events.
                                </article>

                                <hr />

                                <div style={{ textAlign: 'center' }}>
                                    <p>Xamarin Native | Firebase | C# | Agile</p>

                                    <a href='https://github.com/carloshurtadogil/Volunesia' rel='noopener noreferrer' target='_blank'>
                                        <i className='fa fa-github-square' aria-hidden='true' style={{ color: 'white', fontSize: '5em', padding: '10px' }}/>
                                    </a>
                                </div>
                            </div>
                        </Cell>
                    </Grid>

                    <Grid className='project-grid project-img'>
                        <Cell col={3}>
                            <Image src={vmain} style={{width: '100%'}} className='zoom' fluid alt='Volunesia Main Page'  />
                        </Cell>
                        <Cell col={3}>
                            <Image src={vhome} style={{width: '100%'}} className='zoom' fluid alt='Volunesia Main Page'  />
                        </Cell>
                        <Cell col={3}>
                            <Image src={vprofile} style={{width: '100%'}} className='zoom' fluid alt='Volunesia Main Page'  />
                        </Cell>
                        <Cell col={3}>
                            <Image src={vevent} style={{width: '100%'}} className='zoom' fluid alt='Volunesia Main Page'  />
                        </Cell>
                    </Grid>
                </div>






                {/** TRAQUEUR */}
                <div style={{ backgroundColor: 'white', width: '100%', margin: 'auto', paddingTop:'1em', paddingBottom: '2em' }}>
                    <Grid className='project-grid'>
                        <Cell col={4}>
                            <Image src={tsign} alt='Traquer' style={{width: '100%'}}/>
                        </Cell>
                    </Grid>

                    <Grid className='project-grid'>
                        <Cell col={12}>
                            <div className='banner-text'>
                                <article style={{fontSize: '10'}}>
                                    In my quest to learn as many technologies as possible, I stepped out of my comfort zone to 
                                    develop a new mobile application with React Native. This MERN-stack mobile app serves a testament to
                                    my abilities as a developer and a reminder that nothing is impossible, so long as you put in the effort.
                                </article>

                                <hr />

                                <div style={{ textAlign: 'center' }}>
                                    <p>MongoDB | Express.js | React Native | Node.js</p>

                                    <a href='https://github.com/carloshurtadogil/Tracks' rel='noopener noreferrer' target='_blank'>
                                        <i className='fa fa-github-square' aria-hidden='true' style={{ color: 'white', fontSize: '5em', padding: '10px' }}/>
                                    </a>
                                    
                                    <p>Images to be updated</p>
                                </div>
                            </div>
                        </Cell>
                    </Grid>

                    <Grid className='project-grid project-img'>
                        <Cell col={3}>
                            <Image src={vmain} style={{width: '100%'}} className='zoom' fluid alt='Volunesia Main Page'  />
                        </Cell>
                        <Cell col={3}>
                            <Image src={vhome} style={{width: '100%'}} className='zoom' fluid alt='Volunesia Main Page'  />
                        </Cell>
                        <Cell col={3}>
                            <Image src={vprofile} style={{width: '100%'}} className='zoom' fluid alt='Volunesia Main Page'  />
                        </Cell>
                        <Cell col={3}>
                            <Image src={vevent} style={{width: '100%'}} className='zoom' fluid alt='Volunesia Main Page'  />
                        </Cell>
                    </Grid>
                </div>
            </div>
        );
    };
};

export default Projects;