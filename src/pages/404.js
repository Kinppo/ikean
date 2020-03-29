import React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <div className="container">
    <Seo title="Not found" />
    <article className="content" style={{ textAlign: `center` }}>
      <h1 className="content-title">Error 404</h1>
      <section className="content-body">
        Page not found, <Link to="/">return home</Link> to start over
      </section>
    </article>
  </div>
);

export default NotFoundPage;
