import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tutoriales" element={<div className="p-10">Página de Tutoriales (WIP)</div>} />
      <Route path="/privacidad" element={<div className="p-10">Política de Privacidad (WIP)</div>} />
      <Route path="/terminos" element={<div className="p-10">Términos y Condiciones (WIP)</div>} />
      <Route path="*" element={<div className="p-10">404 - Not Found</div>} />
    </Routes>
  )
}

export default App
