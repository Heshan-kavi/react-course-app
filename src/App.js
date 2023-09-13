import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllMeetups from './pages/AllMeetups';
import Favourites from './pages/Favourites';
import NewMeetUp from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetups/>} />
        <Route path="/favourites" element={<Favourites/>} />
        <Route path="/newmeetup" element={<NewMeetUp/>} />
      </Routes>
    </div>
  );
}

export default App;
