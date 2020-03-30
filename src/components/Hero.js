import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import styled from "styled-components";
const Conatiner = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  padding-top: 91px;
  .hero-bg {
    position: relative;
    height: 100%;
    z-index: -1;
    width: 100%;
    height: calc(100vh - 91px);
    position: relative;
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .hero-content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    max-width: 600px;
  }
  h1 {
    font-size: 58px;
    margin-bottom: 15px;
    text-transform: capitalize;
    text-align: center;
  }
  p {
    font-size: 18px;
    line-height: 1.5em;
    margin-bottom: 30px;
    text-align: center;
  }
  button {
    font-size: 16px;
    font-weight: 600;
    background: #118eda;
    color: #fff;
    border-radius: 100px;
    padding: 12px 30px;
    border: 2px solid #118eda;
    transition: all 0.4s;
    &:hover {
      background: transparent;
    }
  }
  @media only screen and (max-width: 1150px) {
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 900px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
    .hero-content {
      width: 100%;
      max-width: 90vw !important;
      transform: translate(-50%, -50%);
    }
    button {
      font-size: 14px;
      padding: 10px 27px;
    }
  }
`;

const Hero = ({ setActiveLink }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "home-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 950) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Conatiner>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="bg"
        className="hero-bg"
      />
      <div className="hero-content">
        <h1>WE Build The trust </h1>
        <p>
          Ikean properties offer a la carte property management options at
          affordable prices contact us today for a quote.
        </p>
        <button
          className="hero-btn"
          onClick={() => {
            scrollTo("#contact");
            setActiveLink(2);
          }}
        >
          Contact Us
        </button>
      </div>
    </Conatiner>
  );
};

export default Hero;
