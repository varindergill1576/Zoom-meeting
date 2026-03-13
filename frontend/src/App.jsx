// import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Landing } from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import dotenv from "dotenv"
import HomeComponent from './pages/home';
import History from './pages/history';
import VideoMeetComponent from './pages/Video';

dotenv.config();

function App() {
  return (
    <div className="App">

      <Router>

        <AuthProvider>


          <Routes>

            <Route path='/' element={<Landing />} />

            <Route path='/auth' element={<Authentication />} />

            <Route path='/home' element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
            <Route path='/:url' element={<VideoMeetComponent />} />
          </Routes>
        </AuthProvider>

      </Router>
    </div>
  );
}

export default App;