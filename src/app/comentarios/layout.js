import React from "react";
import Layout from "@/components/layout";
const LayoutChildren = ({ children }) => {
  return (
    <Layout>
      <div>{children}</div>
    </Layout>
  );
};

export default LayoutChildren;
