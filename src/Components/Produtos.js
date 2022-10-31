import React from 'react';
import Card from './Card';
import Loading from './Loading';
import styled from './Produtos.module.css';

const Produtos = ({ produtos }) => {
  if (!produtos.length) {
    return <Loading />;
  } else
    return (
      <div className={styled.prodContainer}>
        {produtos.map((prod, index) => (
          <Card produto={prod} key={index} />
        ))}
      </div>
    );
};

export default Produtos;
