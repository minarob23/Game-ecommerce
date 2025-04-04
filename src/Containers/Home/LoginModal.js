import React from 'react';
import styles from './Home.module.css';

const LoginModal = ({ onClose, onLogin }) => {
  const handleLogin = () => {
    // Perform login logic here
    onLogin();
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Login Required</h2>
        <p>You must login to access this feature.</p>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;