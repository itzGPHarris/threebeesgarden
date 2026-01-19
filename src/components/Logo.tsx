import Box from '@mui/material/Box';

interface LogoProps {
  width?: number;
}

export default function Logo({ width = 280 }: LogoProps) {
  const height = Math.round(width * (201 / 470));

  return (
    <Box
      component="img"
      src="/logo.svg"
      alt="Three Bees Garden"
      sx={{
        width,
        height,
        display: 'block',
      }}
    />
  );
}
