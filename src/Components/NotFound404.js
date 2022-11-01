import React from 'react';
import Button from './Button';
import styled from './NotFound404.module.css';
import notFoundImg from '../img/404.png';
import Head from './Head';

const NotFound404 = () => {
  return (
    <div className={styled.errorContainer}>
      <Head title='404' />
      <img className={styled.notFoundImg} src={notFoundImg} alt='404' />
      <div className={styled.text}>
        <h2>404 - PAGE NOT FOUND</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <Button nome='Homepage' href='' />
      </div>
    </div>
  );
};

export default NotFound404;
