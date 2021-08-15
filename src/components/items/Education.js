import React from 'react';
import { Cell, Grid } from 'react-mdl';

const Education = (props) => {
  console.log(props.honors);

  /*const honors = props.honors.map((semester, honor) => {
    console.log(semester);
    return (
      <p></p>
    );
  });*/

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

          {/*<h6>Honors</h6>
          <p>{ props.honors[0] }</p>*/}
      </Cell>
  </Grid>
  );

};

export default Education;