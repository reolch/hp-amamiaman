// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../assets/logo.svg'; // ロゴ画像をインポート

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMarineDropdownOpen, setIsMarineDropdownOpen] = useState(false);
  const [isLodgingDropdownOpen, setIsLodgingDropdownOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (!event.target.closest(`.${styles.globalNav}`) && !event.target.closest(`.${styles.menuIcon}`)) {
      setIsMenuOpen(false);
      if (window.innerWidth <= 768) {
        setIsMarineDropdownOpen(false);
        setIsLodgingDropdownOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <img src={logo} alt="マリンサービスあまんのロゴ" className={styles.logoImage} />
        </div>
        <button
          className={styles.menuIcon}
          onClick={toggleMenu}
          aria-label="メニューを切り替え"
          aria-expanded={isMenuOpen}
          aria-controls="global-navigation"
        >
          {isMenuOpen ? (
            <FaTimes className={styles.menuToggleIcon} />
          ) : (
            <FaBars className={styles.menuToggleIcon} />
          )}
        </button>
        <div className={styles.contact}>
          <FaPhone className={styles.phoneIcon} />
          <a href="tel:0997724584" className={styles.phoneNumber}>
            0997-72-4584
          </a>
        </div>
      </div>
      <nav
        className={`${styles.globalNav} ${isMenuOpen ? styles.open : ''}`}
        aria-label="メインナビゲーション"
        id="global-navigation"
      >
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              HOME
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/passion" className={styles.navLink}>
              あまんのこだわり
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.dropdownContainer}`}>
            <button 
              className={styles.dropdownButton}
              onClick={() => window.innerWidth <= 768 && setIsMarineDropdownOpen(!isMarineDropdownOpen)}
              aria-expanded={isMarineDropdownOpen}
            >
              マリンアクティビティ ▼
            </button>
            <ul className={`${styles.dropdownMenu} ${isMarineDropdownOpen ? styles.show : ''}`}>
              <li>
                <Link to="/snorkelling" className={styles.dropdownLink}>
                  シュノーケリング
                </Link>
              </li>
              <li>
                <Link to="/seaKayak" className={styles.dropdownLink}>
                  シーカヤック
                </Link>
              </li>
              <li>
                <Link to="/glassboat" className={styles.dropdownLink}>
                  グラスボート
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.navItem} ${styles.dropdownContainer}`}>
            <button 
              className={styles.dropdownButton}
              onClick={() => window.innerWidth <= 768 && setIsLodgingDropdownOpen(!isLodgingDropdownOpen)}
              aria-expanded={isLodgingDropdownOpen}
            >
              宿泊施設 ▼
            </button>
            <ul className={`${styles.dropdownMenu} ${isLodgingDropdownOpen ? styles.show : ''}`}>
              <li>
                <Link to="/lodging" className={styles.dropdownLink}>
                  民宿
                </Link>
              </li>
              <li>
                <Link to="/trailer" className={styles.dropdownLink}>
                  トレーラーハウス
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link to="/access" className={styles.navLink}>
              アクセス
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink}>
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;