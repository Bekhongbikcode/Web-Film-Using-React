import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contacts from './components/Contact';
import Detail from './components/Details';
import Film from './components/Films';
import FooterPage from './components/Footer';
import ModalCase from './components/ModalCase';
import Navigation from './components/Navigation';
import New from './components/News';
import { ThemeProvid } from './components/ThemeProvide';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvid>
          <Navigation></Navigation>
        </ThemeProvid>
        <Routes>
          <Route path='/' element={<Film />}></Route>
          <Route path='/contact' element={<Contacts />}></Route>
          <Route path='/news' element={<New />}></Route>
          <Route path='/about' element={<About />}></Route >
          <Route path='/detail/:id' element={<Detail />}></Route>
          <Route path='/film' element={<ModalCase />}></Route>
        </Routes>
        <FooterPage></FooterPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
