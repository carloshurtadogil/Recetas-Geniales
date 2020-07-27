import React from 'react';
import { Cell, Grid } from 'react-mdl';

const Education = (props) => {
  return (
    <Grid>
      <Cell col={4}>
          <p>{ props.start } - { props.end }</p>
      </Cell>

      <Cell col={8}>
          <h3 style={{ marginTop: '0px' }}>{ props.schoolName }</h3>
          <h4>{ props.degree }</h4>
          <h6>Relevant Coursework</h6>
          
          <p>{ props.relevantCoursework }</p>
      </Cell>
  </Grid>
  );

};

export default Education;