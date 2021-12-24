import React, { Fragment } from 'react';
import { Accordion } from 'react-bootstrap';
import { reactm } from '../../data/data';

export default function Reactp() {
  return (
    <Fragment>
      <Accordion defaultActiveKey="1" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span>
              <i className="fas fa-folder"></i>React
            </span>
          </Accordion.Header>
          <Accordion.Body>
            {reactm.map((project, index) => (
              <Accordion.Item key={index}>
                <a href={project.url}>
                  <i className="fas fa-file"></i>{project.name}
                </a>
              </Accordion.Item>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Fragment>
  );
}
