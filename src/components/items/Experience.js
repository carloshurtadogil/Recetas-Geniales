import React, { Component } from 'react';
import { Col, ListGroup, Row, Tab } from 'react-bootstrap';

//Experience component for all jobs worked and their details
class Experience extends Component {
    renderLists(list) {
        if (list) {
            return (
                <ul>
                    {list.map((item) => {
                        return (
                            <li key={item.id}>
                                {item.value}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return null;
        }
    };

    render() {
        return (
            <Tab.Container id="work-experience" defaultActiveKey="#siemens-plm-software">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action variant="dark" href="#first-american-trust">
                                First American Trust
                            </ListGroup.Item>

                            <ListGroup.Item action variant="dark" href="#siemens-plm-software">
                                Siemens PLM Software
                            </ListGroup.Item>

                            <ListGroup.Item action variant="dark" href="#tsp">
                                Tacos San Pedro
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#first-american-trust">
                                <h3 style={{ marginTop: '0px' }}>First American Trust</h3>
                                <h5>Software Engineer | February 2020</h5>

                                { this.renderLists(first_american_trust) }
                            </Tab.Pane>

                            <Tab.Pane eventKey="#siemens-plm-software">
                                <h3 style={{ marginTop: '0px' }}>Siemens PLM Software</h3>
                                <h5>Lead IT Intern | September 2017 - June 2019</h5>

                                { this.renderLists(siemens) }
                            </Tab.Pane>

                            <Tab.Pane eventKey="#tsp">
                                <h3 style={{ marginTop: '0px' }}>Tacos San Pedro</h3>
                                <h5>Cashier | May 2015 - August 2017</h5>

                                { this.renderLists(tsp) }
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    };
};

export default Experience;

//All job details for all my work experience
const first_american_trust = [];

const siemens = [
    { id: 1, value: 'Maintained and provided support for the various applications through tools, SQL statements (Ingres DB), and Perl scripts.' },
    { id: 2, value: 'Developed and maintained a new team website using Vue.js.' },
    { id: 3, value: 'Contributed to the development and maintenance of a new internal web application using Vue.js for the frontend and Java Spring/Java Persistence for the backend API.' },
    { id: 4, value: 'Filmed, recorded audio, and edited various videos on behalf of my team. Utilized Camtasia and Final Cut Pro for various effects.' }
];

const tsp = [
    { id: 1, value: 'Processed cash and card payments for food service.' },
    { id: 2, value: 'Received orders and tended to customer needs and/or complaints in a friendly manner.' },
    { id: 3, value: 'Developed a clock-in system using Java, SQL, and a Raspberry Pi to assist the managers with counting worker hours and calculating their respective payments.' }
];
/*
<Grid>
    <Cell col={4}>
        <p>{ this.props.start } - { this.props.end }</p>
    </Cell>

    <Cell col={8}>
        <h3 style={{ marginTop: '0px' }}>{ this.props.jobName }</h3>
        <h5>{ this.props.title }</h5>

        { this.renderLists(this.props.value) }
    </Cell>
</Grid>
*/