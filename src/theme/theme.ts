import { createTheme } from '@mui/material/styles';

// Three Bees Garden Brand Colors
const brandColors = {
  magenta: '#BF46BF',
  magentaLight: '#FEEFFF',
  gold: '#F4CC67',
  mossGreen: '#2d4a3e',
  charcoal: '#1a1a1a',
  linen: '#f5f1e8',
  white: '#ffffff',
};

const theme = createTheme({
  palette: {
    primary: {
      main: brandColors.magenta,
      light: brandColors.magentaLight,
      contrastText: brandColors.white,
    },
    secondary: {
      main: brandColors.mossGreen,
      contrastText: brandColors.white,
    },
    background: {
      default: brandColors.white,
      paper: brandColors.white,
    },
    text: {
      primary: brandColors.charcoal,
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: "'Barlow', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 400,
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 400,
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '12px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
          },
        },
      },
    },
  },
});

export { brandColors };
export default theme;
