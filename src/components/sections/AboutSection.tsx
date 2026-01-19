import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface AboutSectionProps {
  headline?: string;
  paragraphs?: string[];
}

const defaultParagraphs = [
  "Three Bees Garden is more than a flower farm—it's a curated landscape designed for creators. Our fields and apiaries serve as an open-air studio where photographers, painters, and artists find their next muse.",
  "Each season unfolds with intention: heirloom blooms arranged in natural compositions, wildflower meadows buzzing with purpose, and honey harvests that capture the essence of the Pacific Northwest.",
];

export default function AboutSection({
  headline = "Nature's Studio is Taking Root",
  paragraphs = defaultParagraphs,
}: AboutSectionProps) {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="sm">
        {/* Headline */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
        >
          {headline}
        </Typography>

        {/* Body Text */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {paragraphs.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
