import React, { Fragment } from 'react';
import { Accordion } from 'react-bootstrap';
import { cards, landingshtmlcss } from '../../data/data';
export default function HtmlCss() {
  return (
    <Fragment>
      <Accordion defaultActiveKey="1" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span>
              <i className="fas fa-folder"></i>HTML- CSS
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>
                    <i className="fas fa-folder"></i>Cards
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  {cards.map((project, index) => (
                    <Accordion.Item key={index}>
                      <a href={project.url}>
                        <i className="fas fa-file"></i>{project.name}
                      </a>
                    </Accordion.Item>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>
                    <i className="fas fa-folder"></i>Landings
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  {landingshtmlcss.map((project, index) => (
                    <Accordion.Item key={index}>
                      <a href={project.url}>
                        <i className="fas fa-file"></i>{project.name}
                      </a>
                    </Accordion.Item>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Fragment>
  );
}
