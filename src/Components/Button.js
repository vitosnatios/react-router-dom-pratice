import React, { useEffect } from 'react';
import styled from './Button.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Button = ({ nome, href }) => {
  const location = useLocation();

  useEffect(() => {
    const everyB = document.querySelectorAll('a button');
    everyB.length && everyB.forEach((bu) => (bu.style.border = '0px'));

    const b = document.querySelectorAll('a.active button');
    if (b.length) {
      b[0].style.borderLeft = '2px solid #999797';
      b[0].style.borderRight = '2px solid #999797';
    }
  }, [location]);

  return (
    <NavLink className={styled.link} to={href} end>
      <button className={styled.button}>
        <h2 className={styled.h2}>{nome}</h2>
      </button>
    </NavLink>
  );
};

export default Button;
