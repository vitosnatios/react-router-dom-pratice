import Produtos from './Components/Produtos';
import { useGlobalContext } from './GlobalContext';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contato from './Components/Contato';
import Header from './Components/Header';
import styled from './App.module.css';
import Produto from './Components/Produto';

function App() {
  const produtos = useGlobalContext();

  return (
    <BrowserRouter>
      <div className={styled.app}>
        <Header />
        <Routes>
          <Route path='*' element={'404 x.x'} />
          <Route path='/' element={<Produtos produtos={produtos} />} />
          <Route path='contato' element={<Contato />} />
          <Route path='produtos/:id' element={<Produto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
