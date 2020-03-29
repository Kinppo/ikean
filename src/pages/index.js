import React, { Fragment, useState } from "react";
import Seo from "../components/seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import "../styles/app.scss";
const IndexPage = () => {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <Fragment>
      <Seo title="Ikean Properties" />
      <div id="home">
        <Header activeLink={activeLink} setActiveLink={setActiveLink} />
        <Hero activeLink={activeLink} setActiveLink={setActiveLink} />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </Fragment>
  );
};
export default IndexPage;
