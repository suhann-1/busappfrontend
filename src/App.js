import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Add/>}/>
      <Route path='/search'element={<Search/>}/>
      <Route path='/view'element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
