import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import "@/Styles/common_Main.scss";

import InterLogin375 from './InterLogin375';
import InterLogin768 from './InterLogin768';
import InterLogin1440 from './InterLogin1440';
import InterLogin1920 from './InterLogin1920';

const getScreenSize = (width: number) => {
  if (width <= 633) return 'smallMobile';
  if (width <= 768) return 'mobile';
  if (width <= 1440) return 'desktop';
  return 'largeDesktop';
};

const LoginMain: React.FC = () => {
  const [screenSize, setScreenSize] = useState(() => getScreenSize(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize(getScreenSize(width));
      console.log('Width:', width, 'ScreenSize:', getScreenSize(width));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="main-background">
      <Container fluid className="no-gutter">
        {screenSize === 'smallMobile' && <InterLogin375 />}
        {screenSize === 'mobile' && <InterLogin768 />}
        {screenSize === 'desktop' && <InterLogin1440 />}
        {screenSize === 'largeDesktop' && <InterLogin1920 />}
      </Container>
    </main>
  );
};

export default LoginMain;
