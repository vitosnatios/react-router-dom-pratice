import React from 'react';
import styled from './Button.module.css';
import { NavLink } from 'react-router-dom';

const Button = ({ nome, href }) => {
  return (
    <NavLink className={styled.link} to={href} end>
      <button className={styled.button}>
        <h2 className={styled.h2}>{nome}</h2>
      </button>
    </NavLink>
  );
};

export default Button;
