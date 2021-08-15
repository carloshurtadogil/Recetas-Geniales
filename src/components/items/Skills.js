import React from 'react';
import { Col, ListGroup, Row, Tab } from 'react-bootstrap';
import { languages, frameworks, tools } from '../constants/skills';

//Skills component for all skills
const Skills = () => {
  const renderList = (list) => {
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
                <ListGroup.Item action variant="dark" href="#tools">
                    Tools
                </ListGroup.Item>
            </ListGroup>
        </Col>

        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#languages">
              <h3 style={{ marginTop: '0px' }}>Languages</h3>

              { renderList(languages) }
            </Tab.Pane>

            <Tab.Pane eventKey="#frameworks">
              <h3 style={{ marginTop: '0px' }}>Frameworks/APIs</h3>

              { renderList(frameworks) }
            </Tab.Pane>

            <Tab.Pane eventKey="#tools">
              <h3 style={{ marginTop: '0px' }}>Tools</h3>

              { renderList(tools) }
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Skills;