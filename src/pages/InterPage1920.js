import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Navbar, Container, Form, InputGroup, Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMagnify, mdiStar, mdiBell, mdiAccount } from '@mdi/js';
import LeftMainMenu from './LeftMainMenu';
import RightQuickMenu from './RightQuickMenu';
import BottomTable01 from './BottomTable01';
import BottomTable02 from './BottomTable02';
import BottomTable03 from './BottomTable03';
import BottomTable04 from './BottomTable04';
import BottomTable05 from './BottomTable05';
const InterPage1920 = ({ isBottomTableOpen, setIsBottomTableOpen, activeSheet, setActiveSheet, }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mapImage, setMapImage] = useState('/assets/default-map.jpg');
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // 메뉴 클릭 핸들러
    const handleOpenBottomTable01 = () => {
        setActiveSheet(prev => (prev === 'BottomTable01' ? null : 'BottomTable01'));
        setIsBottomTableOpen(true);
    };
    const handleOpenBottomTable02 = () => {
        setActiveSheet(prev => (prev === 'BottomTable02' ? null : 'BottomTable02'));
        setIsBottomTableOpen(true);
    };
    const handleOpenBottomTable03 = () => {
        setActiveSheet(prev => (prev === 'BottomTable03' ? null : 'BottomTable03'));
        setIsBottomTableOpen(true);
    };
    const handleOpenBottomTable04 = () => {
        setActiveSheet(prev => (prev === 'BottomTable04' ? null : 'BottomTable04'));
        setIsBottomTableOpen(true);
    };
    const handleOpenBottomTable05 = () => {
        setActiveSheet(prev => (prev === 'BottomTable05' ? null : 'BottomTable05'));
        setIsBottomTableOpen(true);
    };
    const handleToggleS57Map = () => {
        setMapImage(prev => prev === '/assets/s-57-map.jpg' ? '/assets/default-map.jpg' : '/assets/s-57-map.jpg');
    };
    const handleClick = () => console.log('지도 버튼 클릭됨');
    return (_jsx("div", { className: "main-background", style: { backgroundImage: `url(${mapImage})` }, children: _jsx(Navbar, { expand: "lg", className: "bg-body-tertiary", children: _jsxs(Container, { fluid: true, children: [_jsxs(Navbar.Brand, { href: "#action0", className: "navbar__brand-box", children: [_jsx("img", { src: "/assets/winglogo.svg", alt: "\uB85C\uACE0", className: "navbar__brand-logo" }), _jsx("strong", { children: "\uD574\uC591\uD658\uACBD \uC704\uAE30\uB300\uC751 \uD1B5\uD569\uC9C0\uC6D0 \uC2DC\uC2A4\uD15C" })] }), _jsx(Navbar.Toggle, { "aria-controls": "navbarScroll" }), _jsxs(Navbar.Collapse, { id: "navbarScroll", children: [_jsx(LeftMainMenu, { handleOpenBottomTable: handleOpenBottomTable01, handleOpenBottomTable02: handleOpenBottomTable02, handleOpenBottomTable03: handleOpenBottomTable03, handleOpenBottomTable04: handleOpenBottomTable04, handleOpenBottomTable05: handleOpenBottomTable05, mapImage: mapImage, setMapImage: setMapImage }), activeSheet === 'BottomTable01' && isBottomTableOpen && (_jsx(BottomTable01, { isShow: isBottomTableOpen, setIsShow: () => setIsBottomTableOpen(false), windowWidth: windowWidth, isMobile: isMobile })), activeSheet === 'BottomTable02' && isBottomTableOpen && (_jsx(BottomTable02, { isShow: true, setIsShow: () => setActiveSheet(null), windowWidth: windowWidth, isMobile: isMobile })), activeSheet === 'BottomTable03' && isBottomTableOpen && (_jsx(BottomTable03, { isShow: true, setIsShow: () => setActiveSheet(null), windowWidth: windowWidth, isMobile: isMobile })), activeSheet === 'BottomTable04' && isBottomTableOpen && (_jsx(BottomTable04, { isShow: true, setIsShow: () => setActiveSheet(null), windowWidth: windowWidth, isMobile: isMobile })), activeSheet === 'BottomTable05' && isBottomTableOpen && (_jsx(BottomTable05, { isShow: true, setIsShow: () => setActiveSheet(null), windowWidth: windowWidth, isMobile: isMobile })), _jsx(Form, { className: "d-flex", children: _jsxs(InputGroup, { className: "navbar_search-group", children: [_jsx(InputGroup.Text, { className: "navbar_search-icon", children: _jsx(Icon, { path: mdiMagnify, size: 1.2, style: { color: '#fff' } }) }), _jsx(Form.Control, { type: "search", placeholder: "\uAC80\uC0C9", "aria-label": "Search", className: "custom-search-input" })] }) }), _jsx(Button, { variant: "", className: "ms-2 custom-button-01", onClick: handleClick, children: _jsx(Icon, { path: mdiStar, size: 1, color: "#fff" }) }), _jsx(Button, { variant: "", className: "ms-2 custom-button-02", onClick: handleClick, children: _jsx(Icon, { path: mdiBell, size: 1, color: "#fff" }) }), _jsx(Button, { variant: "", className: "ms-2 custom-button-02", onClick: handleClick, children: _jsx(Icon, { path: mdiAccount, size: 1, color: "#fff" }) }), _jsx(RightQuickMenu, { mapImage: mapImage, setMapImage: handleToggleS57Map, defaultMap: "/assets/s-57-map.jpg" })] })] }) }) }));
};
export default InterPage1920;
