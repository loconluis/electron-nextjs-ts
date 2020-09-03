import React from "react";
import Layout from "./Layout";
import ListSettings from "./ListSettings";

export default function Settings() {
  return (
    <Layout title="Settings" showHome>
      <ListSettings />
    </Layout>
  );
}
