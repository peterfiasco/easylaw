import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll, useSpring } from 'framer-motion';
import { theme } from './styles/theme';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Customers from './components/Customers/Customers';
import Features from './components/Features/Features';
import Testimonial from "./components/Testimonials/Testimonials";
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import BusinessRegistration from './pages/BusinessRegistration/BusinessRegistration';
import LegalDocuments from './components/LegalDocuments/LegalDocuments';
import DueDiligence from './components/DueDiligence/DueDiligence';
import IntellectualProperty from './components/IntellectualProperty/IntellectualProperty';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/UserDashboard/Dashboard';
import DocumentEditor from './components/Dashboard/UserDashboard/Documents/DocumentEditor';
import AIAssistantSection from './components/Dashboard/UserDashboard/AIAssistant/AIAssistantSection';
import VerificationSection from './components/Dashboard/UserDashboard/Verification/VerificationSection';
import ConsultationSection from './components/Dashboard/UserDashboard/Consultation/ConsultationSection';
import PaymentSection from './components/Dashboard/UserDashboard/Payments/PaymentSection';
import SettingsSection from './components/Dashboard/UserDashboard/Settings/SettingsSection';

const AppContainer = styled.div`
  background: #0E0D0C;
  color: #FAFAF9;
  min-height: 100vh;
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${theme.colors.gradient};
  transform-origin: 0%;
  z-index: 1000;
`;

const HomePage = () => (
  <>
    <Hero />
    <Customers />
    <Features />
    <Testimonial />
    <FAQ />
  </>
);

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <Router>
      <AppContainer>
        <ProgressBar style={{ scaleX }} />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business-registration" element={<BusinessRegistration />} />
          <Route path="/legal-documents" element={<LegalDocuments />} />
          <Route path="/due-diligence" element={<DueDiligence />} />
          <Route path="/intellectual-property" element={<IntellectualProperty />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="documents" element={<DocumentEditor />} />
            <Route path="ai-assistant" element={<AIAssistantSection />} />
            <Route path="verification" element={<VerificationSection />} />
            <Route path="consultation" element={<ConsultationSection />} />
            <Route path="payments" element={<PaymentSection />} />
            <Route path="settings" element={<SettingsSection />} />
          </Route>
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
