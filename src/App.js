import Produtos from './Components/Produtos';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contato from './Components/Contato';
import Header from './Components/Header';
import styled from './App.module.css';
import Produto from './Components/Produto';
import NotFound404 from './Components/NotFound404';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styled.app}>
        <Header />
        <Routes>
          <Route path='*' element={<NotFound404 />} />
          <Route path='/' element={<Produtos />} />
          <Route path='contato' element={<Contato />} />
          <Route path='produtos/:id' element={<Produto />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
