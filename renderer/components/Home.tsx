import React from "react";
import Layout from "./Layout";
import Pomo from "./Pomo";

const Home: React.FC = () => {
  return (
    <Layout title="Pomodoro">
      <Pomo />
    </Layout>
  );
};

export default Home;
