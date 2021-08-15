import  React from 'react';
import Badge  from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { Cell, Grid } from 'react-mdl';
import { csulb, csulb_honors } from '../constants/education';
import Education from '../items/Education';
import Experience from '../items/Experience';
import Skills from '../items/Skills';

/**Resume component that will outline all details from education, experience, etc. */
const Resume = () => {
  return (
    <div style={{background: 'white'}}>
      <Grid>
        {/**Left Side of Screen holding summary and links */}
        <Cell col={4}>
          <div style={{ textAlign: 'center', paddingTop: '30px' }}>
            <Grid>
              <Cell col={12}>
                <img 
                 src='https://d2xovjauh2wbka.cloudfront.net/portrait.jpeg'
                 alt='Carlos Hurtado'
                 style={{ width: '100%', borderRadius: '25%' }}
                />
              </Cell>
            </Grid>
          </div>

          <h2 style={{ paddingTop: '1em', textAlign: 'center' }}>Carlos Hurtado</h2>
          <h4 style={{ color: 'grey' }}>Software Developer</h4>

          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

          <p>
            I am a Computer Science graduate from California State University, Long Beach. 
            I love programming, traveling, video games, and going to the gym. As a software developer, 
            I enjoy learning new technologies, building new things, and my passion for creating 
            software solutions to today's problems.
          </p>

          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

          <h5>Email</h5>
          <a href='mailto:carloshurtado219@gmail.com'>carloshurtado219@gmail.com</a>

          {/* 
          <h5>Resume</h5>
          <a href={pdf}
            download
            target='_blank' 
            rel='noopener noreferrer'
            >
            Carlos_Hurtado_Resume      <span><img src={icon} alt='pdf' height='25' width='25' /></span>
          </a>
          */}

          <h5>Web</h5>
          <Link to='/'>carlos-hurtado.com</Link>
          <br/>
          <Badge variant="warning">Hosted on AWS</Badge>

          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
        </Cell>

        {/**Right side of screen that holds resume */}
        <Cell col={8} className='resume-right-col'>
          <h2>Education</h2>

          <Education
            degree={ csulb.degree }
            start={ csulb.start }
            end={ csulb.end }
            schoolName={ csulb.schoolName }
            relevantCoursework={ csulb.relevantCoursework }
            honors={ csulb_honors }
          />

          <hr style={{ borderTop: '3px solid #e22947' }} />

          <h2>Experience</h2>

          <Experience />

          <hr style={{ borderTop: '3px solid #e22947' }} />
        
          <h2>Key Skills</h2>

          <Skills/>
        </Cell>
      </Grid>
    </div>
  );
};

export default Resume;