import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import Chatbot from '@site/src/components/Chatbot';
import clsx from 'clsx';
import styles from './FloatingChat.module.css';

function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatLoaded, setIsChatLoaded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  // Only show on documentation pages, not on the chat page itself
  const isChatPage = location.pathname === '/chat';

  if (isChatPage) {
    return null; // Don't show the floating button on the chat page itself
  }

  const toggleChat = () => {
    if (!isOpen) {
      setIsChatLoaded(true); // Load chat only when opened
      setIsOpen(true);
      setIsClosing(false);
    } else {
      // Start closing animation
      setIsClosing(true);
      // After animation completes, close the sidebar
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 400); // Match the animation duration
    }
  };

  return (
    <>
      {!isOpen && !isClosing && (
        <button
          className={styles.floatingButton}
          onClick={toggleChat}
          aria-label="Open AI Tutor"
        >
          <svg
            className={styles.chatIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 10-2.25 0 1.125 1.125 0 002.25 0zM10.875 12a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM14.25 12a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}

      {(isOpen || isClosing) && (
        <div className={styles.sidebarOverlay}>
          <div className={`${styles.sidebar} ${isClosing ? styles.sidebarClosing : ''}`}>
            <div className={styles.sidebarHeader}>
              <h3>AI Tutor</h3>
              <button
                className={styles.closeButton}
                onClick={toggleChat}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
            <div className={styles.chatContainer}>
              {isChatLoaded && <Chatbot />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingChat;