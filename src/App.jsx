import { ResetCss } from './styles/global';
import { AppRouter } from './routes';

export function App() {
  return (
    <>
      <ResetCss />
      <AppRouter />
    </>
  );
}
