import Box from '@mui/material/Box';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

/**
 * Three Bees Garden - Main App
 *
 * Built with Material UI for consistent, maintainable styling.
 *
 * To update content, modify props passed to each section component.
 */

export default function App() {
  return (
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
        <HeroSection />
        <AboutSection />
        <NewsletterSection />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
