import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga4";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AdminPage from './pages/admin/AdminPage';
import { AdminProvider } from './context/AdminContext';
import { ToastProvider } from './context/ToastContext';
import { UserProvider } from './context/UserContext';
import UserLoginPage from './pages/user/UserLoginPage';
import UserDashboard from './pages/user/UserDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

import useSwipeNavigation from './hooks/useSwipeNavigation';
import usePageTracking from './hooks/usePageTracking';

// Initialize Google Analytics
ReactGA.initialize("G-58CS7XEKQP");

const App = () => {
  // Enable global swipe navigation (Back gesture)
  useSwipeNavigation();
  usePageTracking();

  return (
    <HelmetProvider>
      <ToastProvider>
        <AdminProvider>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Layout><HomePage /></Layout>} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/login" element={<UserLoginPage />} />
              <Route path="/portal" element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </UserProvider>
        </AdminProvider>
      </ToastProvider>
    </HelmetProvider>
  );
};

export default App;
