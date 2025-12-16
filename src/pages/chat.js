import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Chatbot from '../components/Chatbot';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './chat.module.css';

function ChatPage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`AI Tutor - ${siteConfig.title}`}
      description="Interactive AI tutor for Physical AI & Humanoid Robotics">
      <main className={styles.chatMain}>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--12">
              <h1 className={clsx('hero__title', styles.title)}>
                AI Tutor: Physical AI & Humanoid Robotics
              </h1>
              <p className={clsx('hero__subtitle', styles.subtitle)}>
                Ask questions about the textbook content and get answers powered by RAG technology
              </p>

              <div className={styles.chatWrapper}>
                <Chatbot />
              </div>

              <div className={styles.infoSection}>
                <h3>How it works</h3>
                <ul>
                  <li>Powered by retrieval-augmented generation (RAG) technology</li>
                  <li>Retrieves information from the Physical AI & Humanoid Robotics textbook</li>
                  <li>Uses vector embeddings to find relevant content</li>
                  <li>Generates accurate responses based on the textbook content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ChatPage;