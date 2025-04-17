import React, { useState } from 'react';
import LoginModal from './LoginModal';
import styles from './Home.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import { ReactComponent as GitHubLogo } from "../../Resources/image/githublogo.svg";
import { ReactComponent as Enter } from "../../Resources/image/enter.svg";
import { ReactComponent as Dice } from "../../Resources/image/dice.svg";
import { ReactComponent as Game } from "../../Resources/image/game.svg";
import { ReactComponent as NotFound } from "../../Resources/image/notfound.svg";
import { ReactComponent as NotFoundQuery } from "../../Resources/image/notfoundquery.svg";
import { ReactComponent as Git } from "../../Resources/image/git.svg";
import { ReactComponent as Performance } from "../../Resources/image/performance.svg";
import { ReactComponent as Sources } from "../../Resources/image/sources.svg";
import { motion, AnimatePresence, m } from "framer-motion";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Cart from '../../Components/Cart/Cart';
import AnimatedScroll from '../AnimatedPage/AnimatedScroll';
import games from '../../utils/games';

const Home = props => {
  const {
    shownGames,
    cartAmount,
    cart,
    cartDisplayed,
    handleOpenCart,
    handleCloseCart,
    clearCart,
    handleRemoveFromCart,
    hoverState,
    setHoverState,
    overlap,
    setOverlap,
    openGamePage
  } = props;

  const [browsing, setBrowsing] = useState(false);
  const [landingPage, setLandingPage] = useState(true);

  const navigate = useNavigate();

  const handleHover = (e) => {
    let newHoverState = hoverState[e.target.id];
    newHoverState.hovered = !newHoverState.hovered;

    setHoverState([
        ...hoverState, hoverState[e.target.id] = newHoverState
    ]);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    window.localStorage.setItem("LoginUser", "true");
    setIsModalOpen(false);
  };

  const requireLogin = () => {
    setIsModalOpen(true);
    return false;
  };

  const handleBrowse = () => {
    if (!window.localStorage.getItem("LoginUser")) {
      requireLogin();
      return;
    }
    setOverlap(true);
    setTimeout(() => {
      setBrowsing(true);
      navigate('/react-ecommerce-store-main/browse');
    }, 1500);
  };

  const handlePlayDice = () => {
    if (!window.localStorage.getItem("LoginUser")) {
      requireLogin();
      return;
    }
    let randomIndex = Math.floor(Math.random() * 32);
    let randomSurname = games[randomIndex].surname;
    setOverlap(true);
    setTimeout(() => {
      setBrowsing(true);
      navigate(`/react-ecommerce-store/games/${randomSurname}`);
    }, 1500);
  };

  const handleHome = () => {
    if (!window.localStorage.getItem("LoginUser")) {
      requireLogin();
      return;
    }
    setBrowsing(false);
    navigate('/');
  };

  const handleNavGamePage = () => {
    if (!window.localStorage.getItem("LoginUser")) {
      requireLogin();
      return;
    }
    setHoverState([...hoverState, hoverState[21].hovered = false]);
    navigate('/react-ecommerce-store/games/riseofthetombraider');
  };
  
  const handleNavNotFoundPage = () => {
    if (!window.localStorage.getItem("LoginUser")) {
      requireLogin();
      return;
    }
    navigate('/react-ecommerce-store/this-page');
  };
  
  const handleNavNotFoundQuery = () => {
    if (!window.localStorage.getItem("LoginUser")) {
      requireLogin();
      return;
    }
    navigate('/react-ecommerce-store/games/404');
  };

  const variants = {
    hidden: { opacity: 1, x: -150 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 150 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 900 },
    visible: { opacity: 1, y: 0, transition: {  y: { type: "tween", duration: 1.5, bounce: 0.3 }} },
  };

  return (
    <div className={styles.main}>
      {overlap ? 
          <motion.div 
            className={styles.overlap}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
          </motion.div> 
      : null}

      {cartDisplayed ? <Cart 
              cartDisplayed={cartDisplayed} 
              handleOpenCart={handleOpenCart}
              handleCloseCart={handleCloseCart}
              cart={cart}
              cartAmount={cartAmount}
              handleHover={handleHover}
              hoverState={hoverState}
              clearCart={clearCart}
              handleRemoveFromCart={handleRemoveFromCart}
              openGamePage={openGamePage}
      /> : null}
      
      <div className={styles.home}>        
        {isModalOpen && (
          <LoginModal onClose={handleCloseModal} onLogin={handleLogin} />
        )}

        <video autoPlay muted loop className={styles.video}>
          <source src={require("../../Resources/image/pyke.mp4")} type="video/mp4" />
        </video>

        <NavBar 
          handleHover={handleHover} 
          hoverState={hoverState}
          browsing={browsing}
          handleBrowse={handleBrowse}
          handleHome={handleHome}
          landingPage={landingPage}
          cartAmount={cartAmount}
          handleOpenCart={handleOpenCart}
          handleCloseCart={handleCloseCart}
          requireLogin={requireLogin}
        />
        
        <div className={styles.container}>
          <div className={styles.center}>
            <div className={styles.splash}>
              <h1>Game Store</h1>
              <p className={styles.intro}>
                Find the latest and greatest games at unbeatable prices. Benefit from round-the-clock support, 
                exclusive deals, and a seamless buying experience. Got feedback? Connect with us or check out career openings!
              </p>
            </div>
    
            <div className={styles.buttons}>
              <button className={`${styles.cta} ${styles.browseBtn}`} onClick={requireLogin} aria-label="Browse">
                <Enter className={styles.ctaSVG} />
                Browse
              </button>
              <button className={styles.cta} onClick={requireLogin} aria-label="Open random game page">
                <Dice className={styles.ctaSVG} />
                Play Dice
              </button>
              <a href="https://github.com/minarob23" target="_blank" rel="noopener noreferrer">
                <button className={styles.cta} aria-label="View Repository">
                  <GitHubLogo className={styles.ctaSVG} />
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;