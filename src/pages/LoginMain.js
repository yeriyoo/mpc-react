import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import "@/Styles/common_Main.scss";
import InterLogin375 from './InterLogin375';
import InterLogin768 from './InterLogin768';
import InterLogin1440 from './InterLogin1440';
import InterLogin1920 from './InterLogin1920';
const getScreenSize = (width) => {
    if (width <= 375)
        return 'smallMobile';
    if (width <= 768)
        return 'mobile';
    if (width <= 1440)
        return 'desktop';
    return 'largeDesktop';
};
const LoginMain = () => {
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
    return (_jsx("main", { className: "main-background", children: _jsxs(Container, { fluid: true, className: "no-gutter", children: [screenSize === 'smallMobile' && _jsx(InterLogin375, {}), screenSize === 'mobile' && _jsx(InterLogin768, {}), screenSize === 'desktop' && _jsx(InterLogin1440, {}), screenSize === 'largeDesktop' && _jsx(InterLogin1920, {})] }) }));
};
export default LoginMain;
