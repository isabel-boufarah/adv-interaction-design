import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import One from './components/one'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'
import Six from './components/Six'
import Seven from './components/Seven'
import Eight from './components/Eight'
import Nine from './components/Nine'
import Ten from './components/Ten'
import Eleven from './components/Eleven';
import Twelve from './components/Twelve';
import Thirteen from './components/Thirteen';
import Fourteen from './components/Fourteen';
import Fifteen from './components/Fifteen';

function App() {
  return (
    <BrowserRouter basename="/scroll-charrette">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/six" element={<Six />} />
        <Route path="/seven" element={<Seven />} />
        <Route path="/eight" element={<Eight />} />
        <Route path="/nine" element={<Nine />} />
        <Route path="/ten" element={<Ten />} />
        <Route path="/eleven" element={<Eleven />} />
        <Route path="/twelve" element={<Twelve />} />
        <Route path="/thirteen" element={<Thirteen />} />
        <Route path="/fourteen" element={<Fourteen />} />
        <Route path="/fifteen" element={<Fifteen />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
