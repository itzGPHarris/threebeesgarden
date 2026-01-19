import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import { brandColors } from '@/theme/theme';

interface FooterProps {
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    pinterest?: string;
    email?: string;
  };
}

export default function Footer({
  socialLinks = {
    instagram: 'https://instagram.com/threebeesgarden',
    facebook: 'https://facebook.com/threebeesgarden',
    pinterest: 'https://pinterest.com/threebeesgarden',
    email: 'mailto:hello@threebeesgarden.com',
  },
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: brandColors.charcoal,
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center' }}>
          {/* Logo Text */}
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 400,
              letterSpacing: '0.1em',
              mb: 3,
            }}
          >
            three bees garden
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
            {socialLinks.instagram && (
              <IconButton
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{
                  color: 'white',
                  '&:hover': { color: brandColors.magenta },
                }}
              >
                <InstagramIcon />
              </IconButton>
            )}
            {socialLinks.facebook && (
              <IconButton
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{
                  color: 'white',
                  '&:hover': { color: brandColors.magenta },
                }}
              >
                <FacebookIcon />
              </IconButton>
            )}
            {socialLinks.pinterest && (
              <IconButton
                href={socialLinks.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                sx={{
                  color: 'white',
                  '&:hover': { color: brandColors.magenta },
                }}
              >
                <PinterestIcon />
              </IconButton>
            )}
            {socialLinks.email && (
              <IconButton
                href={socialLinks.email}
                aria-label="Email"
                sx={{
                  color: 'white',
                  '&:hover': { color: brandColors.magenta },
                }}
              >
                <EmailIcon />
              </IconButton>
            )}
          </Box>

          {/* Location */}
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}
          >
            Gig Harbor, Washington
          </Typography>

          {/* Copyright */}
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            © {currentYear} Three Bees Garden. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
