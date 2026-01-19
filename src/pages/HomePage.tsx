import Box from '@mui/material/Box';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <NewsletterSection />
    </Box>
  );
}
