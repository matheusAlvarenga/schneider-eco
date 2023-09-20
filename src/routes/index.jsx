import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { AboutPage } from '../pages/about';
import { MainPage } from '../pages/demo/main';
import { RankingPage } from '../pages/demo/ranking';
import { RewardsPage } from '../pages/demo/rewards';
import { ClassesPage } from '../pages/demo/classes';
import { ChallengesPage } from '../pages/demo/challenges';
import { CommunityPage } from '../pages/demo/community';
import { ProfilePage } from '../pages/demo/profile';
import { DashboardPage } from '../pages/demo/dashboard';
import { ClassPage } from '../pages/demo/class';
import { ChallengePage } from '../pages/demo/challenge';

export function AppRouter() {
  return (
    <BrowserRouter basename="schneider-eco">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sobre-nos" exact element={<AboutPage />} />
        <Route path="/demo" exact element={<MainPage />} />
        <Route path="/demo/ranking" exact element={<RankingPage />} />
        <Route path="/demo/rewards" exact element={<RewardsPage />} />
        <Route path="/demo/classes" exact element={<ClassesPage />} />
        <Route path="/demo/classes/:id" exact element={<ClassPage />} />
        <Route path="/demo/challenges" exact element={<ChallengesPage />} />
        <Route path="/demo/challenges/:id" exact element={<ChallengePage />} />
        <Route path="/demo/community" exact element={<CommunityPage />} />
        <Route path="/demo/profile" exact element={<ProfilePage />} />
        <Route path="/demo/dashboard" exact element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
