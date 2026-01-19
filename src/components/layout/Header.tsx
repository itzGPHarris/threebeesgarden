import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from '@/components/Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <Box component="header" sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        {/* Logo */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            py: { xs: 3, md: 4 },
          }}
        >
          <Logo width={280} />
        </Box>

        {/* Navigation */}
        <Box sx={{ pb: 2 }}>
          <Navigation />
        </Box>
      </Container>
    </Box>
  );
}
