import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import '@/Styles/common_Main.scss';
import Container from 'react-bootstrap/Container';
import InterPage375 from './InterPage375';
import InterPage768 from './InterPage768';
import InterPage1440 from './InterPage1440';
import InterPage1920 from './InterPage1920';
const getScreenSize = (width) => {
    if (width <= 375)
        return 'smallMobile';
    if (width <= 768)
        return 'mobile';
    if (width <= 1440)
        return 'desktop';
    return 'largeDesktop';
};
const MainPage = () => {
    const [screenSize, setScreenSize] = useState(() => getScreenSize(window.innerWidth));
    const [activeSheet, setActiveSheet] = useState(null);
    const [isBottomTableOpen, setIsBottomTableOpen] = useState(false);
    const [showMapIcons, setShowMapIcons] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScreenSize(getScreenSize(width));
            console.log('Width:', width, 'ScreenSize:', getScreenSize(width));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (_jsx("main", { className: "main-background", children: _jsxs(Container, { fluid: true, className: "no-gutter", children: [screenSize === 'smallMobile' && _jsx(InterPage375, {}), screenSize === 'mobile' && (_jsx(InterPage768, { activeSheet: activeSheet, setActiveSheet: setActiveSheet, isBottomTableOpen: isBottomTableOpen, setIsBottomTableOpen: setIsBottomTableOpen })), screenSize === 'desktop' && (_jsx(InterPage1440, { activeSheet: activeSheet, setActiveSheet: setActiveSheet, isBottomTableOpen: isBottomTableOpen, setIsBottomTableOpen: setIsBottomTableOpen })), screenSize === 'largeDesktop' && (_jsx(InterPage1920, { activeSheet: activeSheet, setActiveSheet: setActiveSheet, isBottomTableOpen: isBottomTableOpen, setIsBottomTableOpen: setIsBottomTableOpen }))] }) }));
};
export default MainPage;
