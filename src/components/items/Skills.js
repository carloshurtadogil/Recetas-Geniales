import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

//Skills component
class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={6}>
                    <div style={{ display: 'flex' }}>
                        { this.props.skill }
                    </div>
                </Cell>

                <Cell col={6}>
                <div style={{ display: 'flex' }}>
                        { this.props.skill }
                    </div>
                </Cell>
            </Grid>
        );
    };
};

export default Skills;