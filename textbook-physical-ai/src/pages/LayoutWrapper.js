import React from 'react';
import Layout from '@theme/Layout';
import FloatingChat from '../components/FloatingChat';

function LayoutWrapper(props) {
  return (
    <Layout {...props}>
      {props.children}
      <FloatingChat />
    </Layout>
  );
}

export default LayoutWrapper;