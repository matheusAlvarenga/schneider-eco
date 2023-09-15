import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { AboutPage } from '../pages/about';
import { MainPage } from '../pages/demo/main';

export function AppRouter() {
  return (
    <BrowserRouter basename="schneider-eco">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sobre-nos" exact element={<AboutPage />} />
        <Route path="/demo" exact element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
