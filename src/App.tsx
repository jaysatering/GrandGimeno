import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThankYouPage from './pages/ThankYouPage';
import PrivatePage from './pages/PrivatePage';
import GTMLoader from './components/GTMLoader';

export default function App() {
  return (
    <>
      <GTMLoader />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/private" element={<PrivatePage />} />
        </Routes>
      </Router>
    </>
  );
}