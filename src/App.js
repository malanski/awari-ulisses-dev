import { HashRouter, Routes, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';

import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'

import { Atividade1 } from './pages/Atividade1'
import { Atividade2 } from './pages/Atividade2'
import { Atividade3 } from './pages/Atividade3'
import { Atividade4 } from './pages/Atividade4'
import { Atividade5 } from './pages/Atividade5'
import { Atividade6 } from './pages/Atividade6'
import { Atividade7 } from './pages/Atividade7'
import { Atividade8 } from './pages/Atividade8'
import { Atividade9 } from './pages/Atividade9'

import { Atividade12 } from './pages/Atividade12'

import { Atividade15 } from './pages/Atividade15'
import { Atividade18 } from './pages/Atividade18';
import { Atividade19 } from './pages/Atividade19';

import './App.scss';
import { Atividade11 } from './pages/Atividade11';

function App() {
  return (
      <div className="App">
    <HashRouter>

      <Header/>
        <main className='app-main'>
          <Aside />

          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/portfolio' element={<Portfolio />} />

            <Route path ='/atividade1' element={<Atividade1 />} />
            <Route path ='/atividade2' element={<Atividade2 />} />
            <Route path ='/atividade3' element={<Atividade3 />} />
            <Route path ='/atividade4' element={<Atividade4 />} />
            <Route path ='/atividade5' element={<Atividade5 />} />
            <Route path ='/atividade6' element={<Atividade6 />} />
            <Route path ='/atividade7' element={<Atividade7 />} />
            <Route path ='/atividade8' element={<Atividade8 />} />
            <Route path ='/atividade9' element={<Atividade9 />} />

            <Route path ='/atividade11' element={<Atividade11 />} />
            <Route path ='/atividade12' element={<Atividade12 />} />

            <Route path ='/atividade15' element={<Atividade15 />} />
            <Route path ='/atividade18' element={<Atividade18 />} />
            <Route path ='/atividade19' element={<Atividade19 />} />

          </Routes>
        </main>

        <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
