import { Container, Typography, Box } from '@mui/material';

import { HomePage } from '../HomePage/HomePage';
import { FOOTER_HEIGHT } from '../../constants/constants';

// TODO: remove temporary components Header and Footer
const Header = () => (
  <Box
    sx={{
      position: 'sticky',
      top: 0,
      zIndex: 1100,
      color: 'primary.contrastText',
      p: 2,
      bgcolor: '#222',
    }}
  >
    <Typography variant="h6">Sticky Header</Typography>
  </Box>
);

const Footer = () => (
  <Box
    sx={{
      position: 'fixed',
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
      <Box sx={{ pb: `${FOOTER_HEIGHT}px` }}>
        <Container maxWidth={false} sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
          {/* TODO: remove <HomePage, use only children> */}
          <HomePage />
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
