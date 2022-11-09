import { Box } from 'components/Box/Box';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box display="grid">
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
