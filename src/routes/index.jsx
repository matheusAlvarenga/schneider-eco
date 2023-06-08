import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { AboutPage } from '../pages/about';

export function AppRouter() {
  return (
    <BrowserRouter basename="schneider-eco">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sobre-nos" exact element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
