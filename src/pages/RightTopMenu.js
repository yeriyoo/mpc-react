import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RightQuickMenu1440 from './RightQuickMenu1440';
import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMagnify, mdiBell, mdiAccount } from '@mdi/js';
const RightTopMenu = ({ mapImage, setMapImage, defaultMap }) => {
    return (_jsxs("div", { className: "icon-group-wrapper", children: [_jsx(Button, { className: "search-button", children: _jsx(Icon, { path: mdiMagnify, size: 1.2, color: "#fff" }) }), _jsx(Button, { className: "search-button", children: _jsx(Icon, { path: mdiBell, size: 1, color: "#fff" }) }), _jsx(Button, { className: "search-button", children: _jsx(Icon, { path: mdiAccount, size: 1, color: "#fff" }) }), _jsx(RightQuickMenu1440, { mapImage: mapImage, setMapImage: setMapImage, defaultMap: defaultMap })] }));
};
export default RightTopMenu;
