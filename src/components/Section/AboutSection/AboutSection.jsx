// src/components/Section/AboutSection/AboutSection.jsx
import React, { useEffect, useRef } from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const aboutSection = sectionRef.current;
    const aboutContent = contentRef.current;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutContent.classList.add(styles.contentAnimate);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.content} ref={contentRef}>
        <h2>
          大自然で子どもから大人まで<br />
          マリンスポーツを楽しめる！
        </h2>
        <p>
          グラスボートでサンゴ礁の海をご案内。
          <br />
          シーカヤックで奄美の海を探索し、
          <br />
          美しいサンゴ礁の海でシュノーケリングを楽しめます。
          <br />
          ご希望により、海遊びをアレンジすることもできます。
          <br />
          大島海峡の海遊びは「あまん」におまかせ！
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
