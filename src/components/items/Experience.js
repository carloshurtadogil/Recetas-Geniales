import React from 'react';
import { Col, ListGroup, Row, Tab } from 'react-bootstrap';
import { firstAmericanTrust, siemens } from '../constants/experiences';

const Experience = () => {
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
    <Tab.Container id="work-experience" defaultActiveKey="#first-american-trust">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action variant="dark" href="#first-american-trust">
              First American Trust
            </ListGroup.Item>

            <ListGroup.Item action variant="dark" href="#siemens-plm-software">
              Siemens PLM Software
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#first-american-trust">
              <h3 style={{ marginTop: '0px' }}>First American Trust</h3>
              <h5>Software Engineer | February 2020</h5>

              { renderList(firstAmericanTrust) }
            </Tab.Pane>

            <Tab.Pane eventKey="#siemens-plm-software">
              <h3 style={{ marginTop: '0px' }}>Siemens PLM Software</h3>
              <h5>Lead IT Intern | September 2017 - June 2019</h5>

              { renderList(siemens) }
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Experience;