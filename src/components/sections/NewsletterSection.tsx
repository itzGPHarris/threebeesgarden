import { useState, FormEvent } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { brandColors } from '@/theme/theme';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

export default function NewsletterSection({
  title = 'Get Notified',
  description = 'Join our list to receive updates on seasonal blooms, studio days, and honey harvests.',
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call - replace with actual newsletter service
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: brandColors.linen,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: 4 }}
          >
            {description}
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <TextField
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              size="medium"
              sx={{
                flex: 1,
                maxWidth: { sm: 300 },
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'white',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={status === 'loading'}
              sx={{
                px: 4,
                whiteSpace: 'nowrap',
              }}
            >
              {status === 'loading'
                ? 'Sending...'
                : status === 'success'
                ? 'Subscribed!'
                : 'Notify Me'}
            </Button>
          </Box>

          {status === 'success' && (
            <Alert severity="success" sx={{ mt: 3, maxWidth: 400, mx: 'auto' }}>
              Thank you! We'll be in touch when the garden opens.
            </Alert>
          )}

          {status === 'error' && (
            <Alert severity="error" sx={{ mt: 3, maxWidth: 400, mx: 'auto' }}>
              Something went wrong. Please try again.
            </Alert>
          )}

          <Typography
            variant="caption"
            sx={{ display: 'block', mt: 3, color: 'text.secondary' }}
          >
            We respect your privacy. Unsubscribe anytime.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
