import './App.css';
import Signin from './pages/signIn/Signin';
import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/community/Dashboard';
import HomePage from './pages/home/HomePage';
import ForumPage from './pages/forum/ForumPage';
import SignUp from './pages/signUp/SignUp';
import ProfilePage from './pages/Profile/ProfilePage';
import NoticePage from './pages/notification/NoticePage';
import ChatBox from './pages/chatBox/ChatBox';
import ProfileEdit from './pages/profile_edit/ProfileEdit';
import Welcome from './pages/welcome/Welcome';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Welcome/>} />
    <Route path="/sign_in" element={<Signin />} />
    <Route path="/sign_up" element={<SignUp/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/home" element={<HomePage/>} />
    <Route path="/forum" element={<ForumPage/>} />
    <Route path="/profile_page" element={<ProfilePage/>} />
    <Route path="/notice_page" element={<NoticePage/>} />
    <Route path="/chat" element={<ChatBox/>} />
    <Route path="/profile_edit" element={<ProfileEdit/>} />
    </Routes>

    
       </>
  );
}

export default App;
