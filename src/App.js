import logo from './logo.svg';
import './App.css';
import { Masseges, Navbar, Regester, User ,Logout ,Login } from './component/index_exports';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">

      <Navbar />
      <Routes>
        <Route path='Login' element={<Login />}></Route>
        <Route path='Masseges' element={<Masseges />}></Route>
        <Route path='Regester' element={<Regester />}></Route>
        <Route path='Logout' element={<Logout />}></Route>
        <Route path='User' element={<User />}></Route>
      </Routes>

    </div>
  );
}

export default App;
