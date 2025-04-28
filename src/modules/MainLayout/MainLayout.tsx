import { Container, Box } from '@mui/material';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

// TODO: remove temporary component Footer

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
