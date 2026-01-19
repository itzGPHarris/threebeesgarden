import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { brandColors } from '@/theme/theme';

export default function AboutPage() {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="md">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
            About Three Bees Garden
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: '1.125rem',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            A destination that inspires creativity, celebrates the intersection 
            of art and nature, and offers a unique sanctuary for photographers, 
            artists, and our community.
          </Typography>
        </Box>

        {/* Vision Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ mb: 3, fontSize: { xs: '1.75rem', md: '2rem' } }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}
          >
            We are transforming our land into a living canvas — artfully cultivating 
            a stunning visual landscape of seasonal blooms and berries. Three Bees 
            Garden will be a destination where the beauty of nature meets the eye of 
            the artist.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8 }}
          >
            Our goal is to create a sanctuary where photographers, painters, and 
            creators of all kinds can capture and appreciate the beauty of the 
            passing seasons. Every bloom is intentional, every pathway designed 
            with the frame in mind.
          </Typography>
        </Box>

        <Divider sx={{ my: { xs: 4, md: 6 } }} />

        {/* The Land Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ mb: 3, fontSize: { xs: '1.75rem', md: '2rem' } }}
          >
            The Land
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}
          >
            Nestled in the scenic beauty of Gig Harbor, Washington, our property 
            spans acres of Pacific Northwest terrain. The maritime climate provides 
            ideal conditions for a diverse array of flowers, from early spring bulbs 
            through late autumn dahlias.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8 }}
          >
            The land features natural contours and established trees that create 
            distinct microclimates and photo opportunities — morning mist in the 
            lower meadow, golden hour light filtering through the tree line, and 
            open skies perfect for dramatic backdrops.
          </Typography>
        </Box>

        <Divider sx={{ my: { xs: 4, md: 6 } }} />

        {/* The Bees Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ mb: 3, fontSize: { xs: '1.75rem', md: '2rem' } }}
          >
            The Bees
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}
          >
            Our apiaries are central to the garden's ecosystem and identity. The 
            bees are not just pollinators — they're collaborators in creating the 
            vibrant displays that draw visitors to our fields.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8 }}
          >
            Seasonal honey harvests will capture the unique terroir of our garden, 
            with each batch reflecting the blooms of its season. From light spring 
            wildflower honey to rich late-summer varietals, our honey tells the 
            story of the garden's annual cycle.
          </Typography>
        </Box>

        <Divider sx={{ my: { xs: 4, md: 6 } }} />

        {/* For Creators Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ mb: 3, fontSize: { xs: '1.75rem', md: '2rem' } }}
          >
            For Creators
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}
          >
            Three Bees Garden is designed with photographers and artists in mind. 
            We understand composition, lighting, and the importance of an uncluttered 
            frame. Our plantings are arranged to provide natural vignettes, leading 
            lines, and color harmonies that translate beautifully through the lens.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8 }}
          >
            Whether you're a professional photographer seeking a location for client 
            sessions, a content creator building your portfolio, or an artist seeking 
            inspiration, Three Bees Garden offers a curated outdoor studio unlike 
            any other in the Pacific Northwest.
          </Typography>
        </Box>

        {/* Quote */}
        <Box
          sx={{
            bgcolor: brandColors.magentaLight,
            p: { xs: 4, md: 6 },
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            component="blockquote"
            sx={{
              fontStyle: 'italic',
              color: brandColors.charcoal,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              lineHeight: 1.6,
            }}
          >
            "Where every bloom is composed, every moment is considered."
          </Typography>
        </Box>

        {/* Coming Soon */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', fontWeight: 500 }}
          >
            Opening 2027 · Gig Harbor, Washington
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
