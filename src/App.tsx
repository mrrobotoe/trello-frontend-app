import { slate, slateDark } from '@radix-ui/colors';
import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Layout } from '@/components/Layout';
import { About } from '@/Routes/About';
import { Home } from '@/Routes/Home';
import { NoMatch } from '@/Routes/NoMatch';

import { useAppSelector } from './hooks';

export const lightTheme = {
  colors: {
    ...slate,
  },
};

export const darkTheme = {
  colors: {
    ...slateDark,
  },
};

function App() {
  const themes = useAppSelector((state) => state.themes);

  return (
    <ThemeProvider theme={themes.darkMode ? darkTheme : lightTheme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
