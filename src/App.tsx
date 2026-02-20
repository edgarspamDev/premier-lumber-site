import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainLayout } from './layouts/MainLayout';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy-load all pages for code splitting & faster initial load (PageSpeed win)
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Firewood = lazy(() => import('./pages/Firewood').then(m => ({ default: m.Firewood })));
const Pallets = lazy(() => import('./pages/Pallets').then(m => ({ default: m.Pallets })));
const Sawdust = lazy(() => import('./pages/Products').then(m => ({ default: m.Sawdust })));
const CustomLumber = lazy(() => import('./pages/Products').then(m => ({ default: m.CustomLumber })));
const LogPickup = lazy(() => import('./pages/LogPickup').then(m => ({ default: m.LogPickup })));
const TreeServicePartners = lazy(() => import('./pages/TreeServicePartners').then(m => ({ default: m.TreeServicePartners })));
const Privacy = lazy(() => import('./pages/Legal').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Legal').then(m => ({ default: m.Terms })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));
const LocalLandingPage = lazy(() => import('./components/LocalLandingPage').then(m => ({ default: m.LocalLandingPage })));

// Minimal fallback - spinner already shown by index.html app shell
function PageLoader() {
  return <div aria-hidden="true" style={{ minHeight: '60vh' }} />;
}

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="firewood" element={<Firewood />} />
            <Route path="pallets" element={<Pallets />} />
            <Route path="sawdust" element={<Sawdust />} />
            <Route path="custom-lumber" element={<CustomLumber />} />
            <Route path="log-pickup" element={<LogPickup />} />
            <Route path="tree-service-partners" element={<TreeServicePartners />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />

            {/* Hyper-Local SEO Pages */}
            <Route path="locations/gary-firewood" element={<LocalLandingPage city="Gary" service="Firewood" description="Premium seasoned firewood delivered to Gary, IN." image="/images/firewood-delivery.jpg" />} />
            <Route path="locations/hammond-firewood" element={<LocalLandingPage city="Hammond" service="Firewood" description="Best firewood delivery in Hammond. Hardwood & mixed cords available." image="/images/firewood-delivery.jpg" />} />
            <Route path="locations/east-chicago-firewood" element={<LocalLandingPage city="East Chicago" service="Firewood" description="Reliable firewood supplier for East Chicago residents." image="/images/firewood-delivery.jpg" />} />

            <Route path="locations/gary-pallets" element={<LocalLandingPage city="Gary" service="Pallets" description="New and recycled pallets for Gary businesses. GMA standard available." image="/images/pallets-stack.jpg" />} />
            <Route path="locations/hammond-pallets" element={<LocalLandingPage city="Hammond" service="Pallets" description="Bulk wooden pallets delivered to Hammond industrial zones." image="/images/pallets-stack.jpg" />} />
            <Route path="locations/east-chicago-pallets" element={<LocalLandingPage city="East Chicago" service="Pallets" description="Pallet recycling and sales in East Chicago, IN." image="/images/pallets-stack.jpg" />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
