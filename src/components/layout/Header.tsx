import { Link as RouterLink } from 'react-router-dom';
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
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            py: { xs: 3, md: 4 },
            textDecoration: 'none',
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
