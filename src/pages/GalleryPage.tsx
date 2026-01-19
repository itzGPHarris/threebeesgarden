import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { brandColors } from '@/theme/theme';

// Gallery images - easy to update
// Add your images to public/gallery/ folder and update this array
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
    caption: 'California poppies in early morning light',
    cols: 2,
    rows: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800&q=80',
    caption: 'Site preparation underway',
    cols: 1,
    rows: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80',
    caption: 'Local honey harvest',
    cols: 1,
    rows: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&q=80',
    caption: 'Wildflower meadow in progress',
    cols: 2,
    rows: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1518882605630-8eb5e9a44d74?w=800&q=80',
    caption: 'Preparing the bee sanctuary',
    cols: 1,
    rows: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80',
    caption: 'Spring bulbs emerging',
    cols: 1,
    rows: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1462275646964-a0e3c8e67f07?w=800&q=80',
    caption: 'Golden hour on the property',
    cols: 2,
    rows: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=800&q=80',
    caption: 'Berry patch planning',
    cols: 1,
    rows: 1,
  },
];

export default function GalleryPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, goToPrev, goToNext]);

  const getCols = () => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    return 4;
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
            Gallery
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
          >
            A glimpse into our journey — from site preparation to first blooms. 
            This garden is taking root, one season at a time.
          </Typography>
        </Box>

        {/* Masonry Image Grid */}
        <ImageList
          variant="quilted"
          cols={getCols()}
          rowHeight={isMobile ? 150 : 200}
          gap={isMobile ? 8 : 16}
        >
          {galleryImages.map((image, index) => (
            <ImageListItem
              key={index}
              cols={isMobile ? 1 : image.cols || 1}
              rows={isMobile ? 1 : image.rows || 1}
              sx={{
                cursor: 'pointer',
                overflow: 'hidden',
                '&:hover img': {
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.caption}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* Lightbox Dialog */}
        <Dialog
          open={lightboxOpen}
          onClose={closeLightbox}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: 'transparent',
              boxShadow: 'none',
              maxHeight: '95vh',
            },
          }}
          slotProps={{
            backdrop: {
              sx: { bgcolor: 'rgba(0, 0, 0, 0.95)' },
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: { xs: 1, md: 2 },
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={closeLightbox}
              aria-label="Close"
              sx={{
                position: 'absolute',
                top: { xs: -40, md: -50 },
                right: 0,
                color: 'white',
                '&:hover': { color: brandColors.magenta },
              }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>

            {/* Navigation - Previous */}
            <IconButton
              onClick={goToPrev}
              aria-label="Previous image"
              sx={{
                position: 'absolute',
                left: { xs: -20, md: -60 },
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.3)',
                '&:hover': { 
                  bgcolor: 'rgba(0,0,0,0.6)',
                  color: brandColors.magenta,
                },
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </IconButton>

            {/* Navigation - Next */}
            <IconButton
              onClick={goToNext}
              aria-label="Next image"
              sx={{
                position: 'absolute',
                right: { xs: -20, md: -60 },
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.3)',
                '&:hover': { 
                  bgcolor: 'rgba(0,0,0,0.6)',
                  color: brandColors.magenta,
                },
              }}
            >
              <ChevronRightIcon fontSize="large" />
            </IconButton>

            {/* Main Image */}
            <Box
              component="img"
              src={galleryImages[currentIndex]?.src}
              alt={galleryImages[currentIndex]?.caption}
              sx={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: 1,
              }}
            />

            {/* Caption */}
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                mt: 3,
                textAlign: 'center',
                fontStyle: 'italic',
              }}
            >
              {galleryImages[currentIndex]?.caption}
            </Typography>

            {/* Image Counter */}
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255,255,255,0.6)',
                mt: 1,
              }}
            >
              {currentIndex + 1} / {galleryImages.length}
            </Typography>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
}
