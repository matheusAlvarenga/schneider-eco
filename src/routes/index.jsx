import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';

export function AppRouter() {
  return (
    <BrowserRouter basename="schneider-eco">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
