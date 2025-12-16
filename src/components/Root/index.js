import React from 'react';
import Layout from '@theme/Layout';
import FloatingChat from '@site/src/components/FloatingChat';

function Root({ children }) {
  return (
    <Layout>
      {children}
      <FloatingChat />
    </Layout>
  );
}

export default Root;