import { jsx as _jsx } from "react/jsx-runtime";
import Icon from '@mdi/react';
import { mdiChessPawn } from '@mdi/js';
const MapIcon = ({ style }) => {
    return (_jsx("div", { className: "map-icon", style: {
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: '#FF0000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 10,
            ...style,
        }, children: _jsx(Icon, { path: mdiChessPawn, size: 1, color: "#fff" }) }));
};
export default MapIcon;
