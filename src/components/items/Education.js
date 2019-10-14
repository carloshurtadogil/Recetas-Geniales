import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

//Education component for all schools attended and degrees acquired
class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{ this.props.start } - { this.props.end }</p>
                </Cell>

                <Cell col={8}>
                    <h3 style={{ marginTop: '0px' }}>{ this.props.schoolName }</h3>
                    <h4>{ this.props.degree }</h4>
                    <h6>Relevant Coursework</h6>
                    
                    <p>{ this.props.schoolDescription }</p>
                </Cell>
            </Grid>
        );
    };
};

export default Education;