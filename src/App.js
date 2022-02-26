import { HashRouter, Routes, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';

import { Home } from './pages/Home'
import { Atividade1 } from './pages/Atividade1'
import { Atividade2 } from './pages/Atividade2'
import { Atividade3 } from './pages/Atividade3'
import { Atividade4 } from './pages/Atividade4'
import { Atividade5 } from './pages/Atividade5'
import './App.scss';

function App() {
  return (
      <div className="App">
    <HashRouter>

      <Header/>
        <main className='app-main'>
          <Aside />

          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/atividade1' element={<Atividade1 />} />
            <Route path ='/atividade2' element={<Atividade2 />} />
            <Route path ='/atividade3' element={<Atividade3 />} />
            <Route path ='/atividade4' element={<Atividade4 />} />
            <Route path ='/atividade5' element={<Atividade5 />} />
          </Routes>
        </main>

        <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
