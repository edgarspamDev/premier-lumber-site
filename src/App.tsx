import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainLayout } from './layouts/MainLayout';
import { ScrollToTop } from './components/ScrollToTop';
import { 
  Home, 
  About,
  Firewood, 
  Pallets, 
  Sawdust, 
  CustomLumber, 
  LogPickup, 
  TreeServicePartners,
  Contact,
  Privacy,
  Terms,
  NotFound
} from './pages';
import { LocalLandingPage } from './components/LocalLandingPage';
// import PhotoReview from './pages/PhotoReview';

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
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
          {/* <Route path="photo-review" element={<PhotoReview />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
