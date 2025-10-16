import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal, Button, Form, Pagination, Accordion } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose, mdiPlusCircleOutline, mdiMinusCircle, mdiMapMarker, mdiFileDocumentEditOutline, mdiRadar } from '@mdi/js';
import Modal01 from './Modal01';
const BottomAccordionList = ({ handleClose, isShow, }) => {
    const [isOpen, setIsOpen] = useState(isShow);
    const [activeKeys, setActiveKeys] = useState([]);
    const accidentList = [
        {
            title: '0001 / 2025-05-25 00:00',
            details: [
                '예측시간 : 12H',
                '진행률 : 100%',
                '유종 : Disel',
                _jsxs("span", { children: ["\uBC14\uB85C\uC2E4\uD589 : ", _jsx(Icon, { path: mdiRadar, size: 1, color: "#008AFF" })] }),
                '유출량 : 1kl',
                _jsxs("span", { children: ["\uC0AC\uACE0\uC815\uBCF4 : ", _jsx(Icon, { path: mdiFileDocumentEditOutline, size: 1, color: "#11154B" })] }),
            ],
        },
        {
            title: '0002 / 2025-07-31 15:00',
            details: [
                '예측시간 : 12H',
                '진행률 : 100%',
                '유종 : Disel',
                _jsxs("span", { children: ["\uBC14\uB85C\uC2E4\uD589 : ", _jsx(Icon, { path: mdiRadar, size: 1, color: "#008AFF" })] }),
                '유출량 : 1kl',
                _jsxs("span", { children: ["\uC0AC\uACE0\uC815\uBCF4 : ", _jsx(Icon, { path: mdiFileDocumentEditOutline, size: 1, color: "#11154B" })] }),
            ],
        },
        {
            title: '0003 / 2025-11-14 21:00',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '예측시간 : 12H',
                '진행률 : 100%',
                '유종 : Disel',
                _jsxs("span", { children: ["\uBC14\uB85C\uC2E4\uD589 : ", _jsx(Icon, { path: mdiRadar, size: 1, color: "#008AFF" })] }),
                '유출량 : 1kl',
                _jsxs("span", { children: ["\uC0AC\uACE0\uC815\uBCF4 : ", _jsx(Icon, { path: mdiFileDocumentEditOutline, size: 1, color: "#11154B" })] }),
            ],
        },
        {
            title: '0004 / 2025-11-14 21:00',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '예측시간 : 12H',
                '진행률 : 100%',
                '유종 : Disel',
                _jsxs("span", { children: ["\uBC14\uB85C\uC2E4\uD589 : ", _jsx(Icon, { path: mdiRadar, size: 1, color: "#008AFF" })] }),
                '유출량 : 1kl',
                _jsxs("span", { children: ["\uC0AC\uACE0\uC815\uBCF4 : ", _jsx(Icon, { path: mdiFileDocumentEditOutline, size: 1, color: "#11154B" })] }),
            ],
        },
        {
            title: '0004 / 2025-11-14 21:00',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '예측시간 : 12H',
                '진행률 : 100%',
                '유종 : Disel',
                _jsxs("span", { children: ["\uBC14\uB85C\uC2E4\uD589 : ", _jsx(Icon, { path: mdiRadar, size: 1, color: "#008AFF" })] }),
                '유출량 : 1kl',
                _jsxs("span", { children: ["\uC0AC\uACE0\uC815\uBCF4 : ", _jsx(Icon, { path: mdiFileDocumentEditOutline, size: 1, color: "#11154B" })] }),
            ],
        },
        {
            title: '0004 / 2025-11-14 21:00',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '예측시간 : 12H',
                '진행률 : 100%',
                '유종 : Disel',
                _jsxs("span", { children: ["\uBC14\uB85C\uC2E4\uD589 : ", _jsx(Icon, { path: mdiRadar, size: 1, color: "#008AFF" })] }),
                '유출량 : 1kl',
                _jsxs("span", { children: ["\uC0AC\uACE0\uC815\uBCF4 : ", _jsx(Icon, { path: mdiFileDocumentEditOutline, size: 1, color: "#11154B" })] }),
            ],
        },
        {
            title: '0004 / 2025-11-14 21:00',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '예측시간 : 12H',
                '진행률 : 100%',
                '유종 : Disel',
                _jsxs("span", { children: ["\uBC14\uB85C\uC2E4\uD589 : ", _jsx(Icon, { path: mdiRadar, size: 1, color: "#008AFF" })] }),
                '유출량 : 1kl',
                _jsxs("span", { children: ["\uC0AC\uACE0\uC815\uBCF4 : ", _jsx(Icon, { path: mdiFileDocumentEditOutline, size: 1, color: "#11154B" })] }),
            ],
        },
    ];
    const toggleKey = (key) => {
        setActiveKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
    };
    return (_jsx("div", { className: `accordion-bottom-table ${isOpen ? 'open' : 'closed'}`, children: _jsxs("div", { className: `bottom-sheet ${isOpen ? 'open' : 'closed'}`, children: [_jsx("div", { className: "sheet-handle", onClick: () => setIsOpen(!isOpen), role: "button", "aria-label": isOpen ? '접기' : '펼치기', tabIndex: 0, onKeyDown: (e) => {
                        if (e.key === 'Enter')
                            setIsOpen(!isOpen);
                    } }), _jsxs("div", { className: "sheet-header", children: [_jsx("span", { children: "\uC720\uCD9C\uC720 \uD655\uC0B0 \uC608\uCE21 \uBAA9\uB85D" }), _jsx("button", { className: "close-btn", onClick: handleClose, children: _jsx(Icon, { path: mdiClose, size: 1 }) })] }), _jsx("div", { className: "btn-group", children: _jsx(Button, { children: "+ \uC0AC\uACE0\uC815\uBCF4 \uCD94\uAC00\uD558\uAE30" }) }), _jsx("div", { className: `sheet-content ${isOpen ? 'open' : 'closed'}`, children: _jsx(Accordion, { activeKey: activeKeys, onSelect: (k) => {
                            if (typeof k === 'string') {
                                toggleKey(k);
                            }
                        }, alwaysOpen: true, children: accidentList.map((item, index) => {
                            const eventKey = String(index);
                            const isActive = activeKeys.includes(eventKey);
                            return (_jsxs(Accordion.Item, { eventKey: eventKey, className: "custom-accordion-item", children: [_jsxs(Accordion.Header, { onClick: (e) => {
                                            e.preventDefault();
                                            toggleKey(eventKey);
                                        }, children: [_jsx("span", { className: "accordion-icon", children: _jsx(Icon, { path: isActive ? mdiMinusCircle : mdiPlusCircleOutline, size: 1, color: isActive ? '#008AFF' : '#000000' }) }), _jsx("span", { className: "accordion-title", children: item.title }), _jsx("span", { className: "accordion-right-icon", children: _jsx(Icon, { path: mdiMapMarker, size: 1, color: isActive ? '#FF0000' : '#FF0000' }) })] }), _jsx(Accordion.Body, { children: _jsx("div", { className: "details-grid", children: item.details.map((detail, i) => (_jsx("div", { className: "detail-item", children: detail }, i))) }) })] }, eventKey));
                        }) }) })] }) }));
};
const BottomTable02 = ({ isShow, setIsShow, windowWidth }) => {
    const handleClose = () => setIsShow(false);
    const [showModal01, setShowModal01] = useState(false);
    const isAccordionView = windowWidth <= 991;
    const isModalView = windowWidth >= 991;
    if (!isShow)
        return null;
    const tableContent = (_jsxs(_Fragment, { children: [_jsxs("div", { className: "custom-top-bar d-flex justify-content-between align-items-center mb-2", children: [_jsxs("div", { className: "d-flex align-items-center", children: [_jsx("span", { className: "me-2 fw-bold", children: "\uCD1D 7\uAC74" }), _jsxs(Form.Select, { size: "sm", style: { width: '100px', height: '34px' }, children: [_jsx("option", { children: "7\uAC74" }), _jsx("option", { children: "14\uAC74" }), _jsx("option", { children: "28\uAC74" })] })] }), _jsx("div", { children: _jsx(Button, { variant: "primary", size: "sm", className: "me-2 custom-btn", onClick: () => setShowModal01(true), children: "+ \uC0AC\uACE0\uC815\uBCF4 \uCD94\uAC00\uD558\uAE30" }) })] }), _jsx("div", { className: "bottom-inline-table", children: _jsxs("table", { className: "table table-bordered table-sm mb-0", children: [_jsx("thead", { className: "table-light", children: _jsxs("tr", { children: [_jsx("th", { children: "\uBC88\uD638" }), _jsx("th", { children: "\uC0AC\uACE0\uC2DC\uAC01" }), _jsx("th", { children: "\uC608\uCE21\uC2DC\uAC04" }), _jsx("th", { children: "\uC720\uC885" }), _jsx("th", { children: "\uC608\uCE21 \uC720\uCD9C\uB7C9" }), _jsx("th", { children: "\uC0AC\uACE0\uC9C0\uC810" }), _jsx("th", { children: "\uC9C4\uD589\uB960" }), _jsx("th", { children: "\uBC14\uB85C\uC2E4\uD589" }), _jsx("th", { children: "\uC0AC\uACE0\uC815\uBCF4" })] }) }), _jsx("tbody", { children: [
                                {
                                    id: 1,
                                    사고시각: '2025-05-25 00:00',
                                    예측시간: '12H',
                                    유종: 'Disel',
                                    예측유출량: '1kl',
                                    ['사고지점']: _jsx(Icon, { path: mdiMapMarker, size: 1, color: "#FF0000" }),
                                    진행률: 'FAIL',
                                    ['바로실행']: _jsx(Icon, { path: mdiRadar, size: 1, color: "#008AFF" }),
                                    ['사고정보']: _jsx(Icon, { path: mdiFileDocumentEditOutline, size: 1, color: "#11154B" })
                                },
                                {
                                    id: 2,
                                    사고시각: '2025-05-25 00:00',
                                    예측시간: '12H',
                                    유종: 'Disel',
                                    예측유출량: '1kl',
                                    ['사고지점']: _jsx(Icon, { path: mdiMapMarker, size: 1, color: "#FF0000" }),
                                    진행률: 'FAIL',
                                    ['바로실행']: _jsx(Icon, { path: mdiRadar, size: 1, color: "#008AFF" }),
                                    ['사고정보']: _jsx(Icon, { path: mdiFileDocumentEditOutline, size: 1, color: "#11154B" })
                                },
                                {
                                    id: 3,
                                    사고시각: '2025-05-25 00:00',
                                    예측시간: '12H',
                                    유종: 'Disel',
                                    예측유출량: '1kl',
                                    ['사고지점']: _jsx(Icon, { path: mdiMapMarker, size: 1, color: "#FF0000" }),
                                    진행률: '100%',
                                    ['바로실행']: _jsx(Icon, { path: mdiRadar, size: 1, color: "#008AFF" }),
                                    ['사고정보']: _jsx(Icon, { path: mdiFileDocumentEditOutline, size: 1, color: "#11154B" })
                                },
                                {
                                    id: 4,
                                    사고시각: '2025-05-25 00:00',
                                    예측시간: '12H',
                                    유종: 'Disel',
                                    예측유출량: '1kl',
                                    ['사고지점']: _jsx(Icon, { path: mdiMapMarker, size: 1, color: "#FF0000" }),
                                    진행률: '70%',
                                    ['바로실행']: _jsx(Icon, { path: mdiRadar, size: 1, color: "#008AFF" }),
                                    ['사고정보']: _jsx(Icon, { path: mdiFileDocumentEditOutline, size: 1, color: "#11154B" })
                                },
                            ].map((row) => (_jsxs("tr", { children: [_jsx("td", { children: row.id }), _jsx("td", { children: row.사고시각 }), _jsx("td", { children: row.예측시간 }), _jsx("td", { children: row.유종 }), _jsx("td", { children: row.예측유출량 }), _jsx("td", { style: { cursor: 'pointer' }, children: row.사고지점 }), _jsx("td", { style: { color: row.진행률 === 'FAIL'
                                                ? '#FF0000'
                                                : row.진행률 === '100%'
                                                    ? '#008AFF'
                                                    : '#000000',
                                            fontWeight: 'bold',
                                        }, children: row.진행률 }), _jsx("td", { style: { cursor: 'pointer' }, children: row.바로실행 }), _jsx("td", { style: { cursor: 'pointer' }, children: row.사고정보 })] }, row.id))) })] }) }), _jsx("div", { className: "pagination-group mt-3", children: _jsxs(Pagination, { size: "sm", children: [_jsx(Pagination.First, {}), _jsx(Pagination.Prev, {}), _jsx(Pagination.Item, { children: 1 }), _jsx(Pagination.Ellipsis, {}), _jsx(Pagination.Item, { children: 10 }), _jsx(Pagination.Item, { children: 11 }), _jsx(Pagination.Item, { active: true, children: 12 }), _jsx(Pagination.Item, { children: 13 }), _jsx(Pagination.Item, { disabled: true, children: 14 }), _jsx(Pagination.Ellipsis, {}), _jsx(Pagination.Item, { children: 20 }), _jsx(Pagination.Next, {}), _jsx(Pagination.Last, {})] }) })] }));
    return (_jsxs(_Fragment, { children: [isAccordionView && _jsx(BottomAccordionList, { handleClose: handleClose, isShow: isShow }), isModalView && (_jsxs("div", { className: "bottom-table-modal", children: [_jsxs(Modal.Header, { children: [_jsx(Modal.Title, { children: "\uC720\uCD9C\uC720 \uD655\uC0B0 \uC608\uCE21 \uBAA9\uB85D" }), _jsx("div", { className: "ms-auto", children: _jsx(Button, { variant: "link-dark", size: "sm", onClick: handleClose, children: _jsx(Icon, { path: mdiClose, size: 1 }) }) })] }), _jsx(Modal.Body, { children: tableContent })] })), _jsx(Modal01, { show: showModal01, onHide: () => setShowModal01(false) })] }));
};
export default BottomTable02;
