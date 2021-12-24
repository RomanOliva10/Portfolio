import React, { useState } from 'react';
import { Modal, Button, Accordion } from 'react-bootstrap';
import yo from "./img/yo.jpeg";
export default function About() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="about">
      <Accordion defaultActiveKey="1" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span>
              <i className="fas fa-folder"></i>About Me
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <Button variant="none" id="btn" onClick={handleShow}>
              <i className="fas fa-file"></i>Me
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Who I am?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img src={yo} alt="" srcset="" />
                <p>
                  What's up?. My name is Roman, welcome to my portfolio. I am a
                  19 year old boy who are taking his first steps in the IT
                  world. In this site you can see some of the projects in which
                  I have worked in the last time.
                </p>
              </Modal.Body>
            </Modal>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
