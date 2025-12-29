import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
// import Scene from './components/canvas/Scene';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import LoadingScreen from './components/ui/LoadingScreen';
import { initGA, logPageView } from './utils/analytics';
import './styles/globals.css';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ResourcesPage = React.lazy(() => import('./pages/ResourcesPage'));
const FeaturesPage = React.lazy(() => import('./pages/FeaturesPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SignupPage = React.lazy(() => import('./pages/SignupPage'));
const ResourceDetailPage = React.lazy(() => import('./pages/ResourceDetailPage'));

const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const enableScene =
    (typeof process !== 'undefined' &&
      (process.env.VITE_ENABLE_SCENE || process.env.REACT_APP_ENABLE_SCENE)) ??
    'true';

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    const t = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  // Track page views on route change
  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className={isLoading ? "hidden" : ""}>
        {/* Optional 3D background scene; keep outside Layout so it's a background layer. 
        {String(enableScene).toLowerCase() !== 'false' &&  <Scene /> } */}
        <ScrollToTop />

        <Layout>
          <AnimatePresence mode="wait">
            <React.Suspense fallback={<LoadingScreen showProgressBar={false} />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                } />
                <Route path="/about" element={
                  <PageTransition>
                    <AboutPage />
                  </PageTransition>
                } />
                <Route path="/contact" element={
                  <PageTransition>
                    <ContactPage />
                  </PageTransition>
                } />
                <Route path="/resources" element={
                  <PageTransition>
                    <ResourcesPage />
                  </PageTransition>
                } />
                <Route path="/resources/:category" element={
                  <PageTransition>
                    <ResourcesPage />
                  </PageTransition>
                } />
                <Route path="/features" element={
                  <PageTransition>
                    <FeaturesPage />
                  </PageTransition>
                } />
                <Route path="/resources/:type/:id" element={
                  <PageTransition>
                    <ResourceDetailPage />
                  </PageTransition>
                } />
                {/* <Route path="/login" element={
                  <PageTransition>
                    <LoginPage />
                  </PageTransition>
                } />
                <Route path="/signup" element={
                  <PageTransition>
                    <SignupPage />
                  </PageTransition>
                } /> */}
                <Route path="*" element={
                  <PageTransition>
                    <NotFoundPage />
                  </PageTransition>
                } />
              </Routes>
            </React.Suspense>
          </AnimatePresence>
        </Layout>
      </div>
    </>
  );
}
