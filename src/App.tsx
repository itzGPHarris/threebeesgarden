import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import GalleryPage from '@/pages/GalleryPage';

/**
 * Three Bees Garden - Main App
 *
 * Routes:
 * - / (Home)
 * - /about
 * - /gallery
 */

export default function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top Announcement Bar */}
        <AnnouncementBanner />

        {/* Header with Logo and Nav */}
        <Header />

        {/* Main Content */}
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </BrowserRouter>
  );
}
