import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import RightTopMenu from './RightTopMenu';
import SlideMenu from './SlideMenu';
import BottomTable01 from './BottomTable01';
import BottomTable02 from './BottomTable02';
import BottomTable03 from './BottomTable03';
import BottomTable04 from './BottomTable04';
import BottomTable05 from './BottomTable05';
import MapWeatherIcon from './MapWeatherIcon';
import { Navbar, Container, Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
const InterPage768 = ({ activeSheet, setActiveSheet, isBottomTableOpen, setIsBottomTableOpen, }) => {
    const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mapIcons, setMapIcons] = useState([]);
    const [mapImage, setMapImage] = useState('/assets/default-map.jpg');
    const defaultMap = '/assets/default-map.jpg';
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const isMobile = windowWidth <= 991;
    const isMobile375 = windowWidth <= 375;
    const showTable = isBottomTableOpen || (isMobile && !isMobile375);
    const showTable375 = isBottomTableOpen || isMobile375;
    return (_jsxs("div", { className: "main-background-02", children: [_jsxs(Navbar, { expand: "lg", className: "bg-body-tertiary", children: [_jsxs(Container, { fluid: true, children: [_jsxs("div", { className: "d-flex align-items-center me-2", children: [_jsxs(Navbar.Brand, { href: "#action0", className: "navbar__brand-box d-flex align-items-center", children: [_jsx("img", { src: "/assets/winglogo.svg", alt: "\uB85C\uACE0", className: "navbar__brand-logo" }), _jsx("strong", { children: "\uD574\uC591\uD658\uACBD \uC704\uAE30\uB300\uC751 \uD1B5\uD569\uC9C0\uC6D0 \uC2DC\uC2A4\uD15C" })] }), _jsx(Button, { variant: "light", className: "hamburger-button ms-2 d-lg-none", onClick: () => setIsSlideMenuOpen(true), children: _jsx(Icon, { path: mdiMenu, size: 1.3 }) })] }), _jsx(RightTopMenu, { mapImage: mapImage, setMapImage: setMapImage, defaultMap: defaultMap })] }), _jsx(SlideMenu, { isOpen: isSlideMenuOpen, onClose: () => setIsSlideMenuOpen(false), setIsBottomTableOpen: setIsBottomTableOpen, setActiveSheet: setActiveSheet, setMapIcons: setMapIcons })] }), activeSheet === 'BottomTable01' && isBottomTableOpen && (_jsx(BottomTable01, { isShow: true, setIsShow: () => setActiveSheet(null), windowWidth: windowWidth, isMobile: isMobile })), activeSheet === 'BottomTable02' && isBottomTableOpen && (_jsx(BottomTable02, { isShow: true, setIsShow: () => setActiveSheet(null), windowWidth: windowWidth, isMobile: isMobile })), activeSheet === 'BottomTable03' && isBottomTableOpen && (_jsx(BottomTable03, { isShow: true, setIsShow: () => setActiveSheet(null), windowWidth: windowWidth, isMobile: isMobile })), activeSheet === 'BottomTable04' && isBottomTableOpen && (_jsx(BottomTable04, { isShow: true, setIsShow: () => setActiveSheet(null), windowWidth: windowWidth, isMobile: isMobile })), activeSheet === 'BottomTable05' && isBottomTableOpen && (_jsx(BottomTable05, { isShow: true, setIsShow: () => setActiveSheet(null), windowWidth: windowWidth, isMobile: isMobile })), _jsxs("div", { className: "map-container", style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100vh',
                    overflow: 'hidden',
                }, children: [_jsx("img", { src: mapImage, alt: "map", style: {
                            minWidth: '100%',
                            minHeight: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        } }), _jsx(MapWeatherIcon, { positions: mapIcons, mapImage: mapImage })] })] }));
};
export default InterPage768;
