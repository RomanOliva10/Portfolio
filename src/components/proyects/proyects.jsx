import React, { Fragment } from 'react';
import { Accordion } from 'react-bootstrap';
import HtmlCss from './htmlcss';
import Reactp from './reactp';
import Js from './js';

export default function Proyects() {
  return (
    <div className="proyects">
      <Accordion defaultActiveKey="1" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span>
              <i className="fas fa-folder"></i>Proyects
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <Accordion.Item eventKey="0">
              <HtmlCss />
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Js />
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Reactp />
            </Accordion.Item>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
