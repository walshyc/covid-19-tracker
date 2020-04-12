import React from "react";

function Footer() {
  return (
    <footer  className="bg-primary text-white footer p-4" >
    <div className="container text-center">
      <small>Made by <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://twitter.com/walshy_c">walshy_c</a></small>
      <br/>
      <small>Data sourced from  <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://github.com/novelcovid/api">NOVELCovid/API</a></small>
    </div>
  </footer>
  );
}

export default Footer;
