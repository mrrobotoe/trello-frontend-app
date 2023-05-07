import { Outlet } from 'react-router-dom';

import { Navigation } from '@/components/Navigation';

import { LayoutContainer } from './Layout.styles';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Navigation />
      <Outlet />
    </LayoutContainer>
  );
};
