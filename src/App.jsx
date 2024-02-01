import { Routes,Route,Navigate } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homePage/HomePage';
import SingleShowPage from './pages/singleShowPage/SingleShowPage';
import NavBar from './components/navbar';
function App() {
  return (
    <div className="App">
       <NavBar/>
       <Routes>
        <Route path="/" element={<HomePage/> }></Route>
        <Route path="/:id" element={<SingleShowPage/> }></Route>
       </Routes>
      
    </div>
  );
}

export default App;
