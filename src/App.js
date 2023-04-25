
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointement from './Pages/Appointment/Appointement';





function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/appointment' element={<Appointement/>}></Route>

    </Routes>
   
    </div>
  );
}

export default App;
