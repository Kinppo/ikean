import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 0px 0px 20px 0px !important;
  background: #20202c;
  color: #fff;
  .footer-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0em 10vw;
    flex-wrap: wrap;
  }
  .footer-column {
    padding: 10px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      margin: 0.25em 0px;
    }
  }
  .footer-flex {
    display: flex;
    flex-wrap: wrap;
  }
  p {
    margin: 10px 25px;
    font-size: 15px;
    font-weight: 500;
  }
  svg {
    fill: #118eda;
    margin-bottom: 1em;
  }
  .border {
    border-top: 1px solid #e5e5e5;
    padding-top: 20px;
    margin-top: 20px;
  }
  .first-row {
    justify-content: space-evenly;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .mapouter {
    height: 500px;
  }
  iframe {
    width: 100%;
  }
  @media only screen and (max-width: 900px) {
    p {
      margin: 10px 0px;
      font-size: 14px;
    }
  }
`;
const Footer = () => {
  return (
    <Container>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=1925%20Grand%20Ave%20Suite%20129%20Billings%2C%20MT%2059102&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
      <div className="footer-row first-row">
        <div className="footer-column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path d="M0 9l24-9-8.986 24-3.014-12z" />
          </svg>
          <p>1925 Grand Ave Suite 129</p>
          <p>Billings, MT 59102</p>
        </div>
        <div className="footer-column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="header-svg"
          >
            <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
          </svg>
          <p>(406) 426-9993</p>
        </div>
        <div className="footer-column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
          </svg>
          <p>Inquiry@ikeanproperties.com</p>
        </div>
      </div>
      <div className="footer-row border">
        <p>&copy; Ikean Properties Inc. All Right Reserved</p>
        <div className="footer-flex">
          <p>Developed By MBK</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
