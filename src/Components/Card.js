import React from 'react';
import styled from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ produto }) => {
  const { id, nome, fotos } = produto;
  return (
    <Link to={'produtos/' + id} className={styled.card}>
      <img className={styled.prodImg} src={fotos[0].src} alt='' />
      <h2 className={styled.h2}>{nome}</h2>
    </Link>
  );
};

export default Card;
