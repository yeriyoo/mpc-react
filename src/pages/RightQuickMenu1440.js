import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiPlus, mdiMinus, mdiFormatListBulleted, mdiChevronDown, mdiAccountCog } from '@mdi/js';
import Modal03 from './Modal03';
import Modal04 from './Modal04';
const RightQuickMenu1440 = ({ mapImage, setMapImage, defaultMap }) => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [showModal03, setShowModal03] = useState(false);
    const [showModal04, setShowModal04] = useState(false);
    const s57Map = '/assets/s-57-map-1440.jpg';
    const handleS57Click = () => {
        setMapImage(mapImage === s57Map ? defaultMap : s57Map);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Dropdown, { className: "d-inline mx-2", autoClose: false, onToggle: (isOpen) => setIsProfileDropdownOpen(isOpen), children: [_jsx(Dropdown.Toggle, { id: "dropdown-autoclose-outside", className: "navbar__toggle", children: _jsx(Icon, { path: mdiChevronDown, size: 1.2, color: "#fff", className: `dropdown-icon ${isProfileDropdownOpen ? 'rotate' : ''}` }) }), _jsxs(Dropdown.Menu, { className: "dropdown-icon-menu", children: [_jsx(Dropdown.Item, { onClick: () => setShowModal03(true), children: _jsx(OverlayTrigger, { placement: "left", overlay: _jsx(Tooltip, { id: "tooltip-1", children: "\uC120\uBC15\uD56D\uC801" }), children: _jsx("img", { src: "/assets/dr-icon-00.svg", alt: "icon1" }) }) }), _jsx(Dropdown.Item, { onClick: () => setShowModal04(true), children: _jsx(OverlayTrigger, { placement: "left", overlay: _jsx(Tooltip, { id: "tooltip-1", children: "\uB808\uC774\uC544\uC6C3" }), children: _jsx("img", { src: "/assets/dr-icon-01.svg", alt: "icon1" }) }) }), _jsx(Dropdown.Item, { children: _jsx(OverlayTrigger, { placement: "left", overlay: _jsx(Tooltip, { id: "tooltip-2", children: "\uAD6C\uC5ED\uC124\uC815" }), children: _jsx("img", { src: "/assets/dr-icon-02.svg", alt: "icon2" }) }) }), _jsx(Dropdown.Item, { children: _jsx(OverlayTrigger, { placement: "left", overlay: _jsx(Tooltip, { id: "tooltip-3", children: "\uAC70\uB9AC" }), children: _jsx("img", { src: "/assets/dr-icon-03.svg", alt: "icon3" }) }) }), _jsx(Dropdown.Item, { children: _jsx(OverlayTrigger, { placement: "left", overlay: _jsx(Tooltip, { id: "tooltip-4", children: "\uAC70\uB9AC\uD658\uC0B0" }), children: _jsx("img", { src: "/assets/dr-icon-04.svg", alt: "icon4" }) }) }), _jsx(Dropdown.Item, { children: _jsx(OverlayTrigger, { placement: "left", overlay: _jsx(Tooltip, { id: "tooltip-5", children: "\uB2E4\uC6B4\uB85C\uB4DC" }), children: _jsx("img", { src: "/assets/dr-icon-05.svg", alt: "icon5" }) }) }), _jsx(Dropdown.Item, { children: _jsx(OverlayTrigger, { placement: "left", overlay: _jsx(Tooltip, { id: "tooltip-6", children: "\uCEA1\uCC98" }), children: _jsx("img", { src: "/assets/dr-icon-06.svg", alt: "icon6" }) }) }), _jsx(Dropdown.Item, { children: _jsx(OverlayTrigger, { placement: "left", overlay: _jsx(Tooltip, { id: "tooltip-6", children: "\uCD08\uAE30\uD654" }), children: _jsx("img", { src: "/assets/dr-icon-07.svg", alt: "icon7" }) }) }), _jsxs(Dropdown.Item, { className: "dropdown-item-with-label", onClick: handleS57Click, children: [_jsx("img", { src: "/assets/map-small-01.png", style: {
                                            width: '28px',
                                            border: '2px solid #C2CDDE',
                                            borderRadius: '4px',
                                        } }), _jsx("span", { children: "S-57" })] }), _jsxs(Dropdown.Item, { className: "dropdown-item-with-label", children: [_jsx("img", { src: "/assets/map-small-01.png", style: {
                                            width: '28px',
                                            border: '2px solid #C2CDDE',
                                            borderRadius: '4px',
                                        } }), _jsx("span", { children: "S-101" })] }), _jsxs(Dropdown.Item, { className: "dropdown-item-with-label", children: [_jsx("img", { src: "/assets/map-small-01.png", style: {
                                            width: '28px',
                                            border: '2px solid #C2CDDE',
                                            borderRadius: '4px',
                                        } }), _jsx("span", { children: "3D" })] }), _jsx(Dropdown.Item, { children: _jsx(Icon, { path: mdiPlus, size: 1 }) }), _jsx(Dropdown.Item, { children: _jsx(Icon, { path: mdiMinus, size: 1 }) }), _jsx(Dropdown.Item, { children: _jsx(Icon, { path: mdiFormatListBulleted, size: 1 }) }), _jsx(Dropdown.Item, { children: _jsx(Icon, { path: mdiAccountCog, size: 1 }) })] })] }), _jsx(Modal03, { show: showModal03, onHide: () => setShowModal03(false) }), _jsx(Modal04, { show: showModal04, onHide: () => setShowModal04(false) })] }));
};
export default RightQuickMenu1440;
