import { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto'
      );
      const json = await data.json();
      setProdutos(json);
    };
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={produtos}>{children}</GlobalContext.Provider>
  );
};
