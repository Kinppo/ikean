const React = require("react");
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
       `
      }}
    />
  ]);
};
