import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Hero images - easily update these
const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=80',
    alt: 'Vibrant wildflower field with California poppies and purple flowers',
  },
  {
    url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1600&q=80',
    alt: 'Golden honey harvest',
  },
  {
    url: 'https://images.unsplash.com/photo-1691008050937-86491652d729?w=1600&q=80',
    alt: 'Honeybee in flower meadow',
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <Box component="section" id="home">
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: 300, sm: 400, md: 450 },
            overflow: 'hidden',
            bgcolor: 'grey.100',
          }}
        >
          {/* Images */}
          {heroImages.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image.url}
              alt={image.alt}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: index === currentIndex ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out',
              }}
            />
          ))}

          {/* Navigation Arrows */}
          <IconButton
            onClick={goToPrev}
            aria-label="Previous image"
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.8)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.95)' },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={goToNext}
            aria-label="Next image"
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.8)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.95)' },
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          {/* Dots */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
            }}
          >
            {heroImages.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
