import { BrowserRouter, Routes, Route } from 'react-router-dom';
import True from './True';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<True />} />
      </Routes>
    </BrowserRouter>
  );
}