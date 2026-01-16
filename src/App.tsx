import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import TutorialsPage from '@/pages/TutorialsPage';
import TutorialDetailPage from '@/pages/TutorialDetailPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tutoriales" element={<TutorialsPage />} />
      <Route path="/tutoriales/:slug" element={<TutorialDetailPage />} />
      <Route path="/privacidad" element={<PrivacyPage />} />
      <Route path="/terminos" element={<TermsPage />} />
      <Route path="*" element={<div className="p-10">404 - Not Found</div>} />
    </Routes>
  )
}

export default App
