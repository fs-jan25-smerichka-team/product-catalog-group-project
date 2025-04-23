import { Box, Grid, Typography } from '@mui/material';

export const HomePage: React.FC = () => {
  return (
    <>
      <Grid container direction="column" spacing={'80px'}>
        {/* Hero Section */}
        <Grid>
          <Box sx={{ bgcolor: '#eee', height: '500px' }}>
            <Typography variant="h2">Hero Section</Typography>
          </Box>
        </Grid>

        {/* Brand new models */}
        <Grid>
          <Box sx={{ bgcolor: '#ccc', height: '500px' }}>
            <Typography variant="h2">Brand new models</Typography>
          </Box>
        </Grid>

        {/* Shop by category */}
        <Grid>
          <Box sx={{ bgcolor: '#ccc' }}>
            <Typography variant="h2" align={'left'}>
              Shop by category
            </Typography>
            <Grid container spacing={2}>
              {['Mobile phones', 'Tablets', 'Accessories'].map(label => (
                <Grid key={label} size={{ mobile: 4, tablet: 4, desktop: 8 }}>
                  <Box sx={{ bgcolor: 'purple', height: '300px' }}>
                    <div className={'card'}>{label}</div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Hot prices */}
        <Grid>
          <Box sx={{ bgcolor: '#ccc', height: '500px' }}>
            <Typography variant="h2">Hot prices</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
