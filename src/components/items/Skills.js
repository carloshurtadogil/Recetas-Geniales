import React, { Component } from 'react';
import { Col, ListGroup, Row, Tab } from 'react-bootstrap';

//All languages I have a great understanding of
const languages = [
    { id: 1, value: 'C#' },
    { id: 2, value: 'HTML/CSS' },
    { id: 3, value: 'Java' },
    { id: 4, value: 'JavaScript' },
    { id: 5, value: 'Perl' },
    { id: 6, value: 'SQL' },
    { id: 7, value: 'NoSQL' }

];

//All framworks/apis I have mastered
const frameworks = [
    { id: 1, value: 'Bootstrap' },
    { id: 2, value: 'Express.js' },
    { id: 3, value: 'Firebase' },
    { id: 4, value: 'Java Persistence' },
    { id: 5, value: 'MongoDB' },
    { id: 6, value: 'Node.js' },
    { id: 7, value: 'Postman' },
    { id: 8, value: 'React' },
    { id: 9, value: 'React Native' },
    { id: 10, value: 'Spring' },
    { id: 11, value: 'Vue.js' },
];

//All software I have used over the years
const software = [
    { id: 1, value: 'Camtasia' },
    { id: 2, value: 'Eclipse' },
    { id: 3, value: 'Final Cut Pro' },
    { id: 4, value: 'GitHub' },
    { id: 5, value: 'GitKraken' },
    { id: 6, value: 'NetBeans' },
    { id: 7, value: 'Unity' },
    { id: 8, value: 'Visual Studio' },
    { id: 9, value: 'VS Code' },
    { id: 10, value: 'Xamarin Native' },
    { id: 11, value: 'XCode' },
];

//Skills component for all skills
class Skills extends Component {
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
    }

    render() {
        return (
            <Tab.Container id="work-Skills" defaultActiveKey="#languages">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action variant="dark" href="#languages">
                                Languages
                            </ListGroup.Item>
                            <ListGroup.Item action variant="dark" href="#frameworks">
                                Frameworks/APIs
                            </ListGroup.Item>
                            <ListGroup.Item action variant="dark" href="#software">
                                Software
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#languages">
                                <h3 style={{ marginTop: '0px' }}>Languages</h3>

                                { this.renderLists(languages) }
                            </Tab.Pane>

                            <Tab.Pane eventKey="#frameworks">
                                <h3 style={{ marginTop: '0px' }}>Frameworks/APIs</h3>

                                { this.renderLists(frameworks) }
                            </Tab.Pane>

                            <Tab.Pane eventKey="#software">
                                <h3 style={{ marginTop: '0px' }}>Software</h3>

                                { this.renderLists(software) }
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    };
};

export default Skills;