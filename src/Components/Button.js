import React from 'react';
import styled from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ nome, href }) => {
  return (
    <Link className={styled.link} to={href}>
      <button className={styled.button}>
        <h2 className={styled.h2}>{nome}</h2>
      </button>
    </Link>
  );
};

export default Button;
