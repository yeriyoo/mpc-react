import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import MapWeatherIcon from './MapWeatherIcon';
const weatherItems = [
    {
        label: '해양관측부이(KHOA)',
        children: [
            { label: '해양관측부이(KHOA)' },
            { label: '조위관측부이(KHOA)' },
            { label: '해양기상부이(KMA)' },
            { label: '파고부이(KMA)' },
            { label: '등표(KMA)' },
        ],
    },
    {
        label: '해양기상예보',
        children: [{ label: '해상예보' }, { label: '해상특보' }, { label: '예비특보' }],
    },
    {
        label: '해양기상관측',
        children: [{ label: '풍향' }, { label: '풍속' }, { label: '지점별 날씨' }],
    },
    {
        label: '해양조석',
        children: [{ label: '유향' }, { label: '유속현황' }, { label: '고조/저조' }, { label: '물때' }],
    },
    {
        label: '천문자료',
        children: [{ label: '일출/일몰' }, { label: '월출/월몰' }, { label: '월광' }],
    },
];
const LeftMainMenu = ({ handleOpenBottomTable, handleOpenBottomTable02, handleOpenBottomTable03, handleOpenBottomTable04, handleOpenBottomTable05 }) => {
    const [openSubmenu, setOpenSubmenu] = useState(false);
    const [openSubmenu2, setOpenSubmenu2] = useState(false);
    const [openSubmenu3, setOpenSubmenu3] = useState(false);
    // 기상 트리 메뉴 상태
    const [openWeatherDropdown, setOpenWeatherDropdown] = useState(false);
    const [openItems, setOpenItems] = useState({});
    const [checkedItems, setCheckedItems] = useState({});
    const [mapIcons, setMapIcons] = useState([]);
    const dropdownRef = useRef(null);
    // 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenWeatherDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const toggleItem = (label) => {
        setOpenItems(prev => ({ ...prev, [label]: !prev[label] }));
    };
    const fixedPositions = [
        { top: '100%', left: '-75%', transform: 'translate(-50%, -50%)' },
        { top: '120%', left: '-70%', transform: 'translate(-50%, -50%)' },
        { top: '128%', left: '-78%', transform: 'translate(-50%, -50%)' },
        { top: '160%', left: '-80%', transform: 'translate(-50%, -50%)' },
        { top: '166%', left: '-115%', transform: 'translate(-50%, -50%)' },
        { top: '172%', left: '-145%', transform: 'translate(-50%, -50%)' },
    ];
    // 체크박스 클릭 시 아이콘 표시
    const handleCheckboxClick = (label) => {
        setCheckedItems(prev => {
            const newChecked = !prev[label];
            // ✅ 해양관측부이(KHOA)만 아이콘 제어
            if (label === '해양관측부이(KHOA)') {
                if (newChecked) {
                    setMapIcons(fixedPositions);
                }
                else {
                    setMapIcons([]);
                }
            }
            return { ...prev, [label]: newChecked };
        });
    };
    const renderTree = (items, level = 0) => items.map(item => (_jsxs("div", { className: "tree-node", style: { paddingLeft: `${level * 32}px` }, children: [_jsxs("div", { className: "tree-item", children: [item.children && (_jsx("span", { className: `weather-toggle-btn ${openItems[item.label] ? 'open' : 'closed'}`, onClick: () => toggleItem(item.label), children: openItems[item.label] ? '-' : '+' })), level > 0 && (_jsx("input", { type: "checkbox", checked: checkedItems[item.label] || false, onChange: () => handleCheckboxClick(item.label) })), _jsx("span", { className: `tree-label ${checkedItems[item.label] ? 'checked' : ''}`, children: item.label })] }), item.children && openItems[item.label] && renderTree(item.children, level + 1)] }, item.label)));
    return (_jsxs(_Fragment, { children: [_jsxs(Nav, { className: "me-auto my-2 my-lg-0", style: { maxHeight: '100px' }, navbarScroll: true, children: [_jsxs(Nav.Link, { className: "nav_menu-box", onClick: () => {
                            handleOpenBottomTable();
                            setMapIcons([]);
                        }, children: [_jsx("img", { src: "/assets/search.svg", alt: "\uC0AC\uACE0\uC870\uD68C", className: "navbar__menu-icon" }), _jsx("span", { children: "\uC0AC\uACE0\uC870\uD68C" })] }), _jsxs(NavDropdown, { className: "nav_menu-box custom-prediction-dropdown", title: _jsxs("span", { children: [_jsx("img", { src: "/assets/prediction.svg", alt: "\uC608\uCE21", className: "navbar__menu-icon" }), _jsx("span", { className: "navbar__menu-title--bold", children: "\uC608\uCE21" }), _jsx(Icon, { path: mdiChevronDown, size: 1 })] }), id: "dropdown-prediction", onToggle: () => setMapIcons([]), children: [_jsxs("div", { className: `nav-dropdown__item-with-submenu ${openSubmenu3 ? 'open' : ''}`, onClick: () => setOpenSubmenu3(!openSubmenu3), children: [_jsx("span", { className: "nav-dropdown__item-label", children: "\uD604\uC7A5 \uD0D0\uC0C9 \uC815\uBCF4 \uD45C\uCD9C" }), _jsx("span", { className: "submenu-arrow", children: _jsx(Icon, { path: mdiChevronDown, size: 1 }) })] }), openSubmenu3 && (_jsxs("div", { className: "nav-dropdown__submenu", children: [_jsx(NavDropdown.Item, { children: _jsx("div", { onClick: handleOpenBottomTable03, children: "\uC624\uC5FC\uC815\uBCF4 \uBAA9\uB85D" }) }), _jsx(NavDropdown.Item, { children: "\uD604\uC7A5\uC815\uBCF4 \uC5C5\uB85C\uB4DC" })] })), _jsxs("div", { className: `nav-dropdown__item-with-submenu ${openSubmenu ? 'open' : ''}`, onClick: () => setOpenSubmenu(!openSubmenu), children: [_jsx("span", { className: "nav-dropdown__item-label", children: "\uC720\uCD9C\uC720 \uD655\uC0B0\uC608\uCE21" }), _jsx("span", { className: "submenu-arrow", children: _jsx(Icon, { path: mdiChevronDown, size: 1 }) })] }), openSubmenu && (_jsxs("div", { className: "nav-dropdown__submenu", children: [_jsx(NavDropdown.Item, { children: _jsx("div", { onClick: handleOpenBottomTable02, children: "\uC608\uCE21 \uBAA9\uB85D" }) }), _jsx(NavDropdown.Item, { children: "\uC720\uCD9C\uC720 \uD655\uC0B0 \uC608\uCE21" })] })), _jsxs("div", { className: `nav-dropdown__item-with-submenu ${openSubmenu2 ? 'open' : ''}`, onClick: () => setOpenSubmenu2(!openSubmenu2), children: [_jsx("span", { className: "nav-dropdown__item-label", children: "\uC815\uBC00 \uBE44\uAD6C\uC870\uACA9\uC790 \uD574\uC591\uC608\uCE21" }), _jsx("span", { className: "submenu-arrow", children: _jsx(Icon, { path: mdiChevronDown, size: 1 }) })] }), openSubmenu2 && (_jsxs("div", { className: "nav-dropdown__submenu", children: [_jsx(NavDropdown.Item, { children: "\uC608\uCE21 \uBAA9\uB85D" }), _jsx(NavDropdown.Item, { children: "\uC815\uBC00 \uBE44\uAD6C\uC870\uACA9\uC790 \uD574\uC591\uC608\uCE21" })] }))] }), _jsx(NavDropdown, { className: "nav_menu-box weather-dropdown", title: _jsxs("span", { children: [_jsx("img", { src: "/assets/weather.svg", alt: "\uAE30\uC0C1\uC815\uBCF4", className: "navbar__menu-icon" }), _jsx("span", { className: "navbar__menu-title--bold", children: "\uAE30\uC0C1\uC815\uBCF4" })] }), show: openWeatherDropdown, onToggle: () => setOpenWeatherDropdown(prev => !prev), autoClose: false, children: renderTree(weatherItems) }), _jsxs(Nav.Link, { className: "nav_menu-box", onClick: () => {
                            handleOpenBottomTable04();
                            setMapIcons([]);
                        }, children: [_jsx("img", { src: "/assets/ship.svg", alt: "\uD574\uACBD\uC790\uC0B0", className: "navbar__menu-icon" }), _jsx("span", { children: "\uD574\uACBD\uC790\uC0B0" })] }), _jsxs(NavDropdown, { className: "nav_menu-box custom-prediction-dropdown", title: _jsxs("span", { children: [_jsx("img", { src: "/assets/board.svg", alt: "\uAC8C\uC2DC\uD310", className: "navbar__menu-icon" }), _jsx("span", { className: "navbar__menu-title--bold", children: "\uAC8C\uC2DC\uD310" }), _jsx(Icon, { path: mdiChevronDown, size: 1 })] }), id: "dropdown-board", onToggle: () => setMapIcons([]), children: [_jsx(NavDropdown.Item, { onClick: () => {
                                    handleOpenBottomTable05();
                                    setMapIcons([]);
                                }, children: "\uACF5\uC9C0\uC0AC\uD56D" }), _jsx(NavDropdown.Item, { children: "\uAC8C\uC2DC\uD310" }), _jsx(NavDropdown.Item, { children: "Q&A" })] }), _jsxs(NavDropdown, { className: "nav_menu-box custom-prediction-dropdown", title: _jsxs("span", { children: [_jsx("img", { src: "/assets/pollution.svg", alt: "\uC624\uC5FC\uC870\uC0AC", className: "navbar__menu-icon" }), _jsx("span", { className: "navbar__menu-title--bold", children: "\uC624\uC5FC\uC870\uC0AC" }), _jsx(Icon, { path: mdiChevronDown, size: 1 })] }), id: "dropdown-pollution", onToggle: () => setMapIcons([]), children: [_jsx(NavDropdown.Item, { children: "\uD574\uC548\uC624\uC5FC \uC870\uC0AC\uD3C9\uAC00" }), _jsx(NavDropdown.Item, { children: "\uD574\uC548\uC624\uC5FC\uBD84\uD3EC\uB3C4" })] })] }), _jsx("div", { className: "map-container", style: { position: 'relative', width: '100%', height: '500px', marginTop: '16px' }, children: mapIcons.length > 0 && _jsx(MapWeatherIcon, { positions: mapIcons, mapImage: "/assets/default-map.jpg" }) })] }));
};
export default LeftMainMenu;
