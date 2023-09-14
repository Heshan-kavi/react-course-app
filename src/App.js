import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import AllMeetups from './pages/AllMeetups';
import Favourites from './pages/Favourites';
import NewMeetUp from './pages/NewMeetup';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups/>} />
        <Route path="/favourites" element={<Favourites/>} />
        <Route path="/newmeetup" element={<NewMeetUp/>} />
      </Routes>
    </Layout>
  );
}

export default App;
