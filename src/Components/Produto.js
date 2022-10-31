import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../GlobalContext';
import Head from './Head';
import Loading from './Loading';
import styled from './Produto.module.css';

const Produto = () => {
  const params = useParams();
  const data = useGlobalContext();

  const filtered =
    data.length && data.filter((item) => item.id === params.id)[0];
  const { fotos, nome, preco, descricao } = filtered;

  const real = (preco) => {
    return Number(preco).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  if (!filtered) {
    return <Loading />;
  } else
    return (
      <div className={styled.produto}>
        <Head title={nome} />
        <img className={styled.img} src={fotos[0].src} alt={fotos[0].titulo} />
        <div className={styled.detalhes}>
          <h3>{nome}</h3>
          <span className={styled.preco}>{real(preco)}</span>
          <p>{descricao}</p>
        </div>
        {fotos[1] && (
          <img
            className={styled.img}
            src={fotos[1].src}
            alt={fotos[1].titulo}
          />
        )}
      </div>
    );
};

export default Produto;
