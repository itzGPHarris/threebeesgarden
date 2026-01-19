import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { brandColors } from '@/theme/theme';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box component="nav">
      {/* Desktop Navigation */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          gap: 5,
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            sx={{
              color: 'text.primary',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              transition: 'color 0.2s',
              '&:hover': {
                color: brandColors.magenta,
              },
            }}
          >
            {item.label}
          </Link>
        ))}
      </Box>

      {/* Mobile Menu Button */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="Open navigation menu"
          sx={{ color: 'text.primary' }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  textAlign: 'center',
                  '&:hover': {
                    bgcolor: brandColors.magentaLight,
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
