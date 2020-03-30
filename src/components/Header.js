import React, { useEffect } from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
const Container = styled.div`
  background: #20202c;
  .header-wrapper {
    display: flex;
    position: fixed;
    justify-content: space-around !important;
    z-index: 2;
    width: 100%;
    padding: 0px 20px !important;
    transition: all 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 20px 0 0 2em;
    background: #20202c;
  }
  .header-link {
    padding: 35px 25px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    box-sizing: border-box;
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    background: transparent;
    color: #fff;
    &:hover {
      color: #118eda;
    }
  }
  #active-link {
    color: #118eda;
  }
  .logo {
    width: 200px;
    height: 38px;
  }
  .phone-number {
    font-size: 14px;
    font-weight: bold;
    transform: translateY(3px);
    width: 150px;
  }
  .header-svg {
    fill: #118eda;
    margin-right: 0.4em;
  }
  .header-span {
    position: absolute;
    padding-bottom: 1em;
    color: #118eda;
    white-space: nowrap;
  }
  .sticky-header {
    animation: animate 0.8s ease;
  }
  @keyframes animate {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  }
  @media only screen and (max-width: 900px) {
    .header-link {
      display: none;
    }
    .header-wrapper {
      padding: 30px 20px !important;
      justify-content: space-between !important;
    }
    .phone-number {
      transform: translateY(5px);
    }
  }
  @media only screen and (max-width: 500px) {
    .phone-number {
      display: none;
    }
    .header-wrapper {
      justify-content: center !important;
    }
  }
`;
const Header = ({ activeLink, setActiveLink }) => {
  useEffect(() => {
    window.onscroll = function() {
      myFunction();
    };
    var header = document.querySelector(".header-wrapper");
    function myFunction() {
      if (window.pageYOffset > 20) {
        header.classList.add("sticky-header");
      } else {
        header.classList.remove("sticky-header");
      }
    }
  });
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <nav className="header-wrapper">
        <div className="header-item logo">
          <Link to="/">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="bg"
              className="logo"
            />
          </Link>
        </div>
        <div className="header-item">
          <button
            onClick={() => {
              scrollTo("#home");
              setActiveLink(0);
            }}
            className={`header-link`}
            id={activeLink === 0 ? "active-link" : ""}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollTo("#services");
              setActiveLink(1);
            }}
            className="header-link"
            id={activeLink === 1 ? "active-link" : ""}
          >
            Services
          </button>
          <button
            onClick={() => {
              scrollTo("#contact");
              setActiveLink(2);
            }}
            className="header-link"
            id={activeLink === 2 ? "active-link" : ""}
          >
            Contact Us
          </button>
          <button
            onClick={() => {
              scrollTo("#footer");
              setActiveLink(3);
            }}
            className="header-link"
            id={activeLink === 3 ? "active-link" : ""}
          >
            Find Us
          </button>
        </div>
        <div className="header-item phone-number">
          <a href="tel:4064269993">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 24 24"
              className="header-svg"
            >
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
            </svg>
            <span className="header-span">(406) 426-9993</span>
          </a>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
