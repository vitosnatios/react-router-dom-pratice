import React from 'react';
import Button from './Button';
import styled from './Header.module.css';

const Header = () => {
  return (
    <div className={styled.buttons}>
      <Button nome='Produtos' href='/' />
      <Button nome='Contato' href='/contato' />
    </div>
  );
};

export default Header;
