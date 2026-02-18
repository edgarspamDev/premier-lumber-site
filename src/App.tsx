import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainLayout } from './layouts/MainLayout';
import { ScrollToTop } from './components/ScrollToTop';
import { 
  Home, 
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
import PhotoReview from './pages/PhotoReview';

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Navigate to="/" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="firewood" element={<Firewood />} />
          <Route path="pallets" element={<Pallets />} />
          <Route path="sawdust" element={<Sawdust />} />
          <Route path="custom-lumber" element={<CustomLumber />} />
          <Route path="log-pickup" element={<LogPickup />} />
          <Route path="tree-service-partners" element={<TreeServicePartners />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="photo-review" element={<PhotoReview />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
