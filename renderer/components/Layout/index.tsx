import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout: React.FC = (props: any) => {
  return (
    <div className="container">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
