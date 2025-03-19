// src/components/Section/HeroSection/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css'; // CSS Module をインポート

import slide1 from '../../../assets/images/pages/トップページ/スライドショー/slide1.jpg'
import slide2 from '../../../assets/images/pages/トップページ/スライドショー/slide2.jpg'
import slide3 from '../../../assets/images/pages/トップページ/スライドショー/slide3.jpg'
import slide4 from '../../../assets/images/pages/トップページ/スライドショー/slide4.jpg'
import slide5 from '../../../assets/images/pages/トップページ/スライドショー/slide5.jpg'
import slide6 from '../../../assets/images/pages/トップページ/スライドショー/slide6.jpg'

const slides = [
  {
    id: 1,
    image: slide1,
    catchphrase: '',
    description: '',
  },
  {
    id: 2,
    image: slide2,
    catchphrase: '',
    description: '',
  },
  {
    id: 3,
    image: slide3,
    catchphrase: '',
    description: '',
  },
  {
    id: 4,
    image: slide4,
    catchphrase: '',
    description: '',
  },
  {
    id: 5,
    image: slide5,
    catchphrase: '',
    description: '',
  },
  {
    id: 6,
    image: slide6,
    catchphrase: '',
    description: '',
  }
];


const HeroSection = ({ animationType = 'fade' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles['hero-section']}>
      <div className={`${styles['hero-section__slideshow']} ${styles[`hero-section__slideshow--${animationType}`]}`}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles['hero-section__slide']} ${
              index === currentSlide ? styles['hero-section__slide--active'] : ''
            }`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={slide.image}
              alt={slide.catchphrase}
              className={styles['hero-section__slide-image']}
              loading="lazy"
            />
            {index === currentSlide && (
              <div className={styles['hero-section__catchphrase']}>
                <h1 className={styles['hero-section__title']}>{slide.catchphrase}</h1>
                <p className={styles['hero-section__description']}>{slide.description}</p>
              </div>
            )}
          </div>
        ))}
        <button
          className={`${styles['hero-section__nav-button']} ${styles['hero-section__nav-button--prev']}`}
          onClick={prevSlide}
          aria-label="前のスライド"
        >
          ❮
        </button>
        <button
          className={`${styles['hero-section__nav-button']} ${styles['hero-section__nav-button--next']}`}
          onClick={nextSlide}
          aria-label="次のスライド"
        >
          ❯
        </button>
        <div className={styles['hero-section__indicators']}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles['hero-section__indicator']} ${
                index === currentSlide ? styles['hero-section__indicator--active'] : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`スライド${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
