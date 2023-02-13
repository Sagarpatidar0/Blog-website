import './App.css';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import SinglePage from './pages/Single/SinglePage';
import Setting from './pages/setting/Setting';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Writepage from './pages/Writepage';
import { Footer } from './component/Footer/Footer';


function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={user?<Home/>:<Register />} />
          <Route path='/login' element={user?<Home/>:<Login />} />
          <Route path='/post/:id' element={<SinglePage />} />
          <Route path='/newpost' element={user?<Writepage/>:<Login />} />
          <Route path='/setting' element={user?<Setting/>:<Login />} />
          <Route path='*' element={<Home/>} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
