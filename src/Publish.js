import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import '@/Styles/common_Main.scss';
const Publish = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "d-flex flex-column flex-wrap gap-2 p-3", children: [_jsx("h1", { children: "\uC6F9 \uD638\uD658\uC131 \uC9C4\uB2E8\uC6A9" }), _jsx("div", { className: "forms-group", children: _jsxs(Table, { children: [_jsxs("colgroup", { children: [_jsx("col", { style: { width: '140px' } }), _jsx("col", {})] }), _jsx("tbody", { children: _jsx("tr", { children: _jsx("td", { children: _jsxs("div", { className: "d-flex gap-4", children: [_jsx(Link, { to: '/LoginMain', children: "\uB85C\uADF8\uC778" }), _jsx(Link, { to: '/MainPage', children: "\uBA54\uC778\uD398\uC774\uC9C0" })] }) }) }) })] }) })] }) }));
};
export default Publish;
