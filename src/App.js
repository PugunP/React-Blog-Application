import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound.js'
import Details from './components/Details.js';
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/blog/:id' element={<Details/>}></Route>
        <Route path='/home' element={<Navigate to="/"/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
