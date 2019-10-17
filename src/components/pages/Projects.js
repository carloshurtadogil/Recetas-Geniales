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
import tgen from '../../assets/images/traqueur/t-gen.png';
import thome from '../../assets/images/traqueur/t-home.png';
import tmain from '../../assets/images/traqueur/t-main.png';
import tmap from '../../assets/images/traqueur/t-map.png';
import tsign from '../../assets/images/traqueur/t-sign.png'; 

/**All SSAAD Party Screenshots*/
import sforest from '../../assets/images/ssaad/s-forest.png';
import sgame from '../../assets/images/ssaad/s-game.png';
import smulti from '../../assets/images/ssaad/s-multi.png';
import splayer from '../../assets/images/ssaad/s-player.png';
import ssaad from '../../assets/images/ssaad/SSAAD.png';


//Component to showcase most recent and proudest accomplishments
class Projects extends Component {
    render() {
        return (
            <div>
                {/** VOLUNESIA */}
                <div style={{  width: '100%', margin: 'auto', paddingTop:'1em', paddingBottom: '2em' }}>
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
                                    <span>
                                        <i> Volunesia </i>
                                    </span>
                                    is a mobile platform designed to connect prospective volunteers
                                    with nonprofit organizations for events. My group used the Agile methodology
                                    during the development of
                                    <span>
                                        <i> Volunesia</i>
                                    </span>
                                    , using Waffle.io to host our Kanban board and our professor as the client during
                                    our sprint meetings. 
                                </article>

                                <hr />

                                <div style={{ textAlign: 'center' }}>
                                    <p>Xamarin Native | Firebase | C#</p>
                                    
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
                            <Image src={vhome} style={{width: '100%'}} className='zoom' fluid alt='Volunesia Home Page'  />
                        </Cell>
                        <Cell col={3}>
                            <Image src={vprofile} style={{width: '100%'}} className='zoom' fluid alt='Volunesia Profile Page'  />
                        </Cell>
                        <Cell col={3}>
                            <Image src={vevent} style={{width: '100%'}} className='zoom' fluid alt='Volunesia Event Page'  />
                        </Cell>
                    </Grid>
                </div>






                {/** TRAQUEUR */}
                <div className='project-div' >
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
                                    develop a new mobile application with React Native.
                                    <span>
                                        <i> Traqueur </i>
                                    </span>
                                    is simple mobile application that tracks and 
                                    records a user's movements, then displays their path on a map. This MERN-stack mobile app serves a testament to
                                    my abilities as a developer and a reminder that nothing is impossible, so long as you put in the effort.
                                </article>

                                <hr />

                                <div style={{ textAlign: 'center' }}>
                                    <p>MongoDB | Express.js | React Native | Node.js</p>

                                    <a href='https://github.com/carloshurtadogil/Tracks' rel='noopener noreferrer' target='_blank'>
                                        <i className='fa fa-github-square' aria-hidden='true' style={{ color: 'white', fontSize: '5em', padding: '10px' }}/>
                                    </a>
                                </div>
                            </div>
                        </Cell>
                    </Grid>

                    <Grid className='project-grid project-img'>
                        <Cell col={3}>
                            <Image src={tmain} style={{width: '100%', borderRadius: '40px'}} className='zoom' fluid alt='Traqueur Main Page'  />
                        </Cell>
                        <Cell col={3}>
                            <Image src={thome} style={{width: '100%', borderRadius: '40px'}} className='zoom' fluid alt='Traqueur Home Page'  />
                        </Cell>
                        <Cell col={3}>
                            <Image src={tmap} style={{width: '100%', borderRadius: '40px'}} className='zoom' fluid alt='Traqueur Details Page'  />
                        </Cell>
                        <Cell col={3}>
                            <Image src={tgen} style={{width: '100%', borderRadius: '40px'}} className='zoom' fluid alt='Traqueur Account Page'  />
                        </Cell>
                    </Grid>
                </div>






                {/** SSAAD Party */}
                <div style={{  width: '100%', margin: 'auto', paddingTop:'1em', paddingBottom: '2em' }}>
                    <Grid className='project-grid'>
                        <Cell col={2}>
                            <Image src={ssaad} alt='Volunesia' style={{width: '100%'}}/>
                        </Cell>
                    </Grid>

                    <Grid className='project-grid'>
                        <Cell col={12}>
                            <div className='banner-text'>
                                <article style={{fontSize: '10'}}>
                                    A group project for my software architecture and design class, based off the classic 
                                    <span>
                                        <i> Mario Party </i>
                                    </span>
                                    series by Nintendo. 
                                    <span>
                                        <i> Super Software Design and Architecture (SSAAD) Party </i>
                                    </span>
                                    is a party game developed using the Unity game engine. Orginally intended to be a single-
                                    player game, my group took the project a bit further and delved into Unity's networking service
                                    to turn SSAAD to a multiplayer experience. The project was a bit challenging due to a lack of
                                    documentation from the networking service, but we were able to create a basic game that was a 
                                    hit with our class. Furthermore, I even created a short showcase 'commercial', using Final Cut Pro,
                                    that we played during our presentation.
                                </article>

                                <hr />

                                <div style={{ textAlign: 'center' }}>
                                    <p>Unity | Multiplayer and Networking | C#</p>

                                    {/** Github */}
                                    <a href='https://github.com/carloshurtadogil/BoardGame' rel='noopener noreferrer' target='_blank'>
                                        <i className='fa fa-github-square' aria-hidden='true' style={{ color: 'white', fontSize: '5em', padding: '10px' }}/>
                                    </a>

                                    {/** Email */}
                                    <a href='https://youtu.be/inzOi6t6Gsc' rel='noopener noreferrer' target='_blank'>
                                        <i className='fa fa-youtube-square' aria-hidden='true' style={{ color: 'white', fontSize: '5em', padding: '10px' }}/>
                                    </a>
                                </div>
                            </div>
                        </Cell>
                    </Grid>

                    <Grid className='project-grid project-img'>
                        <Cell col={6}>
                            <Image src={sforest} style={{width: '100%'}} className='zoom-s' fluid alt='SSAAD Forest'  />
                        </Cell>
                        <Cell col={6}>
                            <Image src={splayer} style={{width: '100%'}} className='zoom-s' fluid alt='SSAAD Player'  />
                        </Cell>
                    </Grid>

                    <Grid className='project-grid project-img'>
                        <Cell col={6}>
                            <Image src={smulti} style={{width: '100%'}} className='zoom-s' fluid alt='SSAAD Multiplayer View'  />
                        </Cell>
                        <Cell col={6}>
                            <Image src={sgame} style={{width: '100%'}} className='zoom-s' fluid alt='SSAAD Minigame View'  />
                        </Cell>
                    </Grid>
                </div>
            </div>
        );
    };
};

export default Projects;