import { Container, Box } from '@mui/material';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

// TODO: remove temporary component Footer

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Box>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            px: { mobile: 2, tablet: 3, desktop: 4 },
          }}
        >
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
