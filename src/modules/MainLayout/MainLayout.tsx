import { Container, Typography, Box } from '@mui/material';

import { Header } from '../Header/Header';
import { FOOTER_HEIGHT } from '../../constants/constants';

// TODO: remove temporary component Footer

const Footer = () => (
  <Box
    sx={{
      bottom: 0,
      left: 0,
      right: 0,
      height: `${FOOTER_HEIGHT}px`,
      zIndex: 1100,
      color: 'primary.contrastText',
      bgcolor: '#222',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography variant="h6">Footer</Typography>
  </Box>
);

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Box
      // sx={{ pb: `${FOOTER_HEIGHT}px` }}
      >
        <Container maxWidth={false} sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
