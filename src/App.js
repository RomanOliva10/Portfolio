import React, { Fragment } from 'react';
import './style.css';
import About from './components/about/about';
import Proyects from './components/proyects/proyects';
import Footer from './components/footer/footer';
export default function App() {
  return (
    <Fragment>
      <h1>\portfolio\</h1>
      <hr />
      <div className="main">
        <About />
        <Proyects />
      </div>
      <Footer />
    </Fragment>
  );
}
