import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MapIcon from './MapIcon';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
const MapWeatherIcon = ({ positions, mapImage }) => {
    return (_jsxs("div", { style: { position: 'relative', width: '100%', height: '100%' }, children: [_jsx("img", { src: mapImage, alt: "map", style: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' } }), positions.map((pos, idx) => (_jsx(OverlayTrigger, { placement: "top", overlay: _jsx(Tooltip, { id: `tooltip-${idx}`, className: "custom-tooltip", children: _jsxs("div", { className: "tooltip-content", children: [_jsx("div", { className: "tooltip-title", children: "\uD604\uC218\uC6D0_\uC9C4\uD558 \uD574\uC591\uAD00\uCE21\uBD80\uC774" }), _jsxs("div", { className: "tooltip-body", children: [_jsx("div", { children: "\uC720\uD5A5: 187(deg)" }), _jsx("div", { children: "\uC720\uC18D: 12.6(cm/s)" }), _jsx("div", { children: "\uC218\uC628: 20.13(\u00B0C)" })] })] }) }), children: _jsx("div", { style: {
                        position: 'absolute',
                        top: pos.top,
                        left: pos.left,
                    }, children: _jsx(MapIcon, {}) }) }, idx)))] }));
};
export default MapWeatherIcon;
