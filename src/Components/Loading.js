import React from 'react';
import loading from '../img/loading.gif';
import Head from './Head';

const Loading = () => (
  <>
    <Head title='Loading' />
    <img
      style={{ width: '30px', margin: '0 auto' }}
      src={loading}
      alt='loading'
    />
  </>
);

export default Loading;
