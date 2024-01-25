import './App.css';
import Register from './components/Register';
import Signin from './components/Signin';
import Welcome from './components/Welcome';
import { Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import HomePage from './components/Home/HomePage';
import CommunityPage from './components/community/CommunityPage';
import ForumPage from './components/forum/ForumPage';


function App() {
  return (
    <> 
    <Routes>
    <Route path="/" element={<Welcome/>} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/register" element={<Register/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/home" element={<HomePage/>} />
    <Route path="/community" element={<CommunityPage/>} />
    <Route path="/forum" element={<ForumPage/>} />


    </Routes>

    
       </>
  );
}

export default App;
