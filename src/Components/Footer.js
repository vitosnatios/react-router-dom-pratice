import React, { useEffect, useRef } from 'react';
import styled from './Footer.module.css';

const Footer = () => {
  const pRef = useRef();
  const a1Ref = useRef();
  const a2Ref = useRef();
  const timeoutRef = useRef();

  const colorText = () => {
    const randomNum = () => (Math.random() * 255).toFixed();
    [pRef, a1Ref, a2Ref].forEach(
      (refItem) =>
        (refItem.current.style.color = `rgba(${randomNum()}, ${randomNum()}, ${randomNum()}, .8)`)
    );
  };

  useEffect(() => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(colorText, 1000);
  }, []);

  return (
    <footer className={styled.footer}>
      <p className={styled.p} ref={pRef}>
        VitosDeveloper @2022 -<small> origamid</small>
      </p>
      <div className={styled.linksDiv}>
        <a
          className={styled.a}
          ref={a1Ref}
          href='https://github.com/vitosnatios'
          alt='github'
          target='_blank'
          rel='noopener noreferrer'
        >
          github
        </a>
        <a
          className={styled.a}
          ref={a2Ref}
          href='https://www.linkedin.com/in/vitosnatios/'
          alt='linkedin'
          target='_blank'
          rel='noopener noreferrer'
        >
          linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
