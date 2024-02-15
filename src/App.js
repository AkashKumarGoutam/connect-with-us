import './App.css';
import Signin from './components/SignIn/Signin';
import Welcome from './components/welcome/Welcome';
import { Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import HomePage from './components/Home/HomePage';
import CommunityPage from './components/community/CommunityPage';
import ForumPage from './components/forum/ForumPage';
import SignUp from './components/SignUp/SignUp';
import DevDetail from './components/DevDetail/DevDetail';
import ProfilePage from './components/ProfilePage';
import NoticePage from './components/NoticePage';
import ChatBox from './components/ChatBox';
import ProfileEdit from './components/ProfileEdit';


function App() {
  return (
    <> 
    <Routes>
    <Route path="/" element={<Welcome/>} />
    <Route path="/sign_in" element={<Signin />} />
    <Route path="/sign_up" element={<SignUp/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/home" element={<HomePage/>} />
    <Route path="/community" element={<CommunityPage/>} />
    <Route path="/forum" element={<ForumPage/>} />
    <Route path="/dev_detail" element={<DevDetail/>} />
    <Route path="/profile_page" element={<ProfilePage/>} />
    <Route path="/notice_page" element={<NoticePage/>} />
    <Route path="/chat" element={<ChatBox/>} />
    <Route path="/profile_edit" element={<ProfileEdit/>} />
    </Routes>

    
       </>
  );
}

export default App;
