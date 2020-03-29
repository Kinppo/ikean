import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";
const Container = styled.div`
  padding: 0em 0px 0px 0px;
  text-align: center;
  margin: auto;
  width: 100%;
  background: #f6f8fc;
  h2 {
    display: block;
    margin: auto;
    font-size: 40px;
    line-height: 64px;
    text-transform: uppercase;
    margin-bottom: 60px;
    text-align: center;
    width: 100%;
    font-weight: 700;
    box-sizing: border-box;
    color: #118eda;
  }
  .insta-grid {
    display: grid;
    width: 100%;
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }
  .insta-img {
    top: 0;
    position: relative;
  }
  .insta {
    position: relative;
    box-sizing: border-box;
  }
  .insta-info {
    background: RGBA(17, 142, 218, 0.5);
    width: 100%;
    box-sizing: border-box;
    padding: 2em 2em;
    min-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 1s ease;
  }
  .insta:hover .insta-info {
    opacity: 0;
  }
  p {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    color: #fff;
  }

  @media only screen and (max-width: 640px) {
    h2 {
      font-size: 30px !important;
    }
  }
`;
function Instagram({ data }) {
  const captions1 = [
    "We Offer Purchase Prequalify Courses",
    "We Offer Resources To Investors",
    "We Join Investor Groups"
  ];
  return (
    <Container>
      <div className="insta-grid">
        {data.allFile.nodes.map((node, index) => (
          <div className="insta" key={index}>
            <Image
              fluid={node.childImageSharp.fluid}
              alt="work"
              className="insta-img"
            />
            <div className="insta-info">
              <p>{captions1[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        allFile(
          filter: { relativeDirectory: { eq: "services" } }
          sort: { fields: name }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 640, maxHeight: 540) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => <Instagram data={data} />}
  />
);
