import React from 'react';
import styled from './Produto.module.css';
import img from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <div className={styled.produto}>
      <Head title='Contato' />
      <img className={styled.img} src={img} alt='velharia' />
      <div style={{ marginLeft: '20px' }}>
        <h3>Entre em contato.</h3>
        <p
          className={styled.p}
          style={{ fontWeight: '600', fontSize: '1.25em' }}
        >
          vitosdeveloper@gmail.com
        </p>
        <p
          className={styled.p}
          style={{ fontWeight: '600', fontSize: '1.25em' }}
        >
          +55 61 983382294
        </p>
        <p
          className={styled.p}
          style={{ fontWeight: '600', fontSize: '1.25em' }}
        >
          Distrito Federal - Brasil
        </p>
      </div>
    </div>
  );
};

export default Contato;
