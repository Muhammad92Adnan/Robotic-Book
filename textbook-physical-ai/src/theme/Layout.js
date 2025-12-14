import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import FloatingChat from '../components/FloatingChat';

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props} />
      <FloatingChat />
    </>
  );
}