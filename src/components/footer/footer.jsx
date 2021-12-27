import React, { Fragment } from 'react';
import './footer.css';
export default function Footer() {
  return (
    <Fragment>
      <div className="container-footer">
        <div className="container-contact">
          <span>
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/roman-oliva-b70107224/">
              My Linkedin
            </a>
          </span>
          <span>
            <i className="far fa-envelope"></i>
            <a href="mailto:RomanOliva7@gmail.com">RomanOLiva7@gmail.com</a>
          </span>
          <span>
            <i className="fab fa-github"></i>
            <a href="https://github.com/RomanOliva10">My GitHub</a>
          </span>
          <p>
            <i className="fas fa-mobile-alt"></i>Phone Number: (+54) 2233051716
          </p>
        </div>
      </div>
    </Fragment>
  );
}
