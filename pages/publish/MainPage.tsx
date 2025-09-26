import React, { useState, useEffect } from 'react';
import '../../Styles/common_Main.scss';
import Container from 'react-bootstrap/Container';
import InterPage375 from './InterPage375';
import InterPage768 from './InterPage768';
import InterPage1440 from './InterPage1440';
import InterPage1920 from './InterPage1920';

const getScreenSize = (width: number) => {
  if (width <= 375) return 'smallMobile';
  if (width <= 768) return 'mobile';
  if (width <= 1440) return 'desktop';
  return 'largeDesktop';
};

const MainPage: React.FC = () => {
  const [screenSize, setScreenSize] = useState(() => getScreenSize(window.innerWidth));
  const [activeSheet, setActiveSheet] = useState<'BottomTable01' | 'BottomTable02'| 'BottomTable03' | null>(null);
  const [isBottomTableOpen, setIsBottomTableOpen] = useState(false);

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
        {screenSize === 'smallMobile' && <InterPage375 />}
        {screenSize === 'mobile' && (
          <InterPage768
            activeSheet={activeSheet}
            setActiveSheet={setActiveSheet}
            isBottomTableOpen={isBottomTableOpen}
            setIsBottomTableOpen={setIsBottomTableOpen}
          />
        )}
        {screenSize === 'desktop' && (
          <InterPage1440
            activeSheet={activeSheet}
            setActiveSheet={setActiveSheet}
            isBottomTableOpen={isBottomTableOpen}
            setIsBottomTableOpen={setIsBottomTableOpen}
          />
        )}
        {screenSize === 'largeDesktop' && (
          <InterPage1920
            activeSheet={activeSheet}
            setActiveSheet={setActiveSheet}
            isBottomTableOpen={isBottomTableOpen}
            setIsBottomTableOpen={setIsBottomTableOpen}
          />
        )}
      </Container>
    </main>
  );
};

export default MainPage;
