import React from 'react';
import Image from 'react-bootstrap/Image';
import { Grid, Cell } from 'react-mdl';

const Project = (props) => {
  const getGithub = () => {
    if (props.github) {
      return (
          <a href={ props.github } rel='noopener noreferrer' target='_blank'>
            <i className='fa fa-github-square' aria-hidden='true' style={{ color: 'white', fontSize: '5em', padding: '10px' }}/>
          </a>
      );
    }
    return null;
  };

  const getYoutube = () => {
    if (props.youtube) {
      return (
        <a href={ props.youtube } rel='noopener noreferrer' target='_blank'>
          <i className='fa fa-youtube-square' aria-hidden='true' style={{ color: 'white', fontSize: '5em', padding: '10px' }}/>
        </a>
    );
    }
    return null;
  };

  return (
    <div style={ props.componentStyle } className={ props.componentClass }>
      <Grid className='project-grid'>
        <Cell col={ props.titleWidth }>
          <Image
            src={ props.titleSource}
            alt={ props.title }
            style={{width: '100%'}}
          />
        </Cell>
      </Grid>

      <Grid className='project-grid'>
        <Cell col={12}>
          <div className='banner-text'>
            { props.description }

            <hr />

            <div style={{ textAlign: 'center' }}>
              <p>{ props.stack }</p>
              
              { getGithub() }

              { getYoutube() }
            </div>
          </div>
        </Cell>
      </Grid>

      <Grid className='project-grid project-img'>
        {
          props.images.map((obj) => {
            return (
              <Cell col={props.columnWidth} key={ obj.key }>
                <Image
                  fluid
                  className={ props.imageClassname }
                  src={ obj.image }
                  alt={ obj.title }
                  style={ obj.imageStlye }
                />
              </Cell>
            )
          })
        }
      </Grid>
    </div>
  ); 
};

export default Project;