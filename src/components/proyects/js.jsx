import React, { Fragment } from 'react';
import { Accordion } from 'react-bootstrap';

export default function Js() {
  return (
    <Fragment>
      <Accordion defaultActiveKey="1" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span>
              <i className="fas fa-folder"></i>Javascript
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>
                    <i className="fas fa-folder"></i>Logic
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <Accordion.Item>
                    <a href="https://github.com/RomanOliva10/Javascript-Practice/tree/master/Logica">
                        <i className="fas fa-link"></i>Repo
                    </a>
                  </Accordion.Item>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>
                    <i className="fas fa-folder"></i>DOM
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <Accordion.Item>
                    <a href="https://github.com/RomanOliva10/Javascript-Practice/tree/master/DOM">
                        <i className="fas fa-link"></i>Repo
                    </a>
                  </Accordion.Item>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Fragment>
  );
}
