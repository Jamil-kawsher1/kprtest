import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componenet/Home.js/Home';
import Tutorial from './Componenet/Tutorial/Tutorial';
import Login from './Componenet/Login/Login';
import { AuthContextProvider } from './Context/AuthContext';



function App() {
  return (
    <BrowserRouter>

      <Routes>


        <Route element={<Home />} path="/" />
        <Route element={<Tutorial />} path="/tutorial" />
        <Route element={<Login />} path="/login" />


      </Routes>



    </BrowserRouter>

  );
}

export default App;
