import React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  title?: string;
  children?: any;
  showHome?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  showHome,
}: LayoutProps) => {
  return (
    <div className="container">
      <Header title={title} showHome={showHome} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
