import { useEffect } from 'react';

const Head = ({ title }) => {
  useEffect(() => {
    document.title = 'Ranek | ' + title;
  }, [title]);
  return <></>;
};

export default Head;
