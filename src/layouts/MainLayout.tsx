import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-[calc(72px+env(safe-area-inset-bottom))] lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
