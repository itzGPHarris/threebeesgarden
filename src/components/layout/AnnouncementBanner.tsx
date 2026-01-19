import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { brandColors } from '@/theme/theme';

interface AnnouncementBannerProps {
  message?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

export default function AnnouncementBanner({
  message = 'Blooms, Bees and Berries are coming to Gig Harbor in 2027',
  socialLinks = {
    instagram: 'https://instagram.com/threebeesgarden',
    facebook: 'https://facebook.com/threebeesgarden',
    youtube: 'https://youtube.com/@threebeesgarden',
  },
}: AnnouncementBannerProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 2, md: 4 },
        py: 1,
        borderBottom: '1px solid',
        borderColor: 'grey.200',
        bgcolor: 'background.paper',
      }}
    >
      {/* Social Icons */}
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        {socialLinks.instagram && (
          <IconButton
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            aria-label="Instagram"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: brandColors.magenta },
            }}
          >
            <InstagramIcon fontSize="small" />
          </IconButton>
        )}
        {socialLinks.facebook && (
          <IconButton
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            aria-label="Facebook"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: brandColors.magenta },
            }}
          >
            <FacebookIcon fontSize="small" />
          </IconButton>
        )}
        {socialLinks.youtube && (
          <IconButton
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            aria-label="YouTube"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: brandColors.magenta },
            }}
          >
            <YouTubeIcon fontSize="small" />
          </IconButton>
        )}
      </Box>

      {/* Announcement */}
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          textAlign: 'center',
          display: { xs: 'none', sm: 'block' },
        }}
      >
        {message}
      </Typography>

      {/* Spacer for balance */}
      <Box sx={{ width: 100 }} />
    </Box>
  );
}
