import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal, Button, Form, Pagination, Accordion } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose, mdiPlusCircleOutline, mdiMinusCircle, mdiCrosshairsGps } from '@mdi/js';
const BottomAccordionList = ({ handleClose, isShow, }) => {
    const [isOpen, setIsOpen] = useState(isShow);
    const [activeKeys, setActiveKeys] = useState([]);
    const accidentList = [
        {
            title: '부산 북항5부두 장기계류선박 장성호 침몰',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '진행상태 : 진행중',
                '사고위치 : 39.8, 124.4',
                '작성자 : 해경',
                '등록일 : 2024-09-23 19:29:00',
                '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
            ],
        },
        {
            title: '부산 북항5부두 해양오염사고',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '진행상태 : 진행중',
                '사고위치 : 39.8, 124.4',
                '작성자 : 해경',
                '등록일 : 2024-09-23 19:29:00',
                '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
            ],
        },
        {
            title: 'gs칼텍스 해양오염사고',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '진행상태 : 진행중',
                '사고위치 : 39.8, 124.4',
                '작성자 : 해경',
                '등록일 : 2024-09-23 19:29:00',
                '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
            ],
        },
        {
            title: '여수 백야도 선착장 인근해상 해양오염',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '진행상태 : 진행중',
                '사고위치 : 39.8, 124.4',
                '작성자 : 해경',
                '등록일 : 2024-09-23 19:29:00',
                '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
            ],
        },
        {
            title: '여수 선소대교 인근해상 해양오염',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '진행상태 : 진행중',
                '사고위치 : 39.8, 124.4',
                '작성자 : 해경',
                '등록일 : 2024-09-23 19:29:00',
                '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
            ],
        },
        {
            title: '여수항 기름 유출',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '진행상태 : 진행중',
                '사고위치 : 39.8, 124.4',
                '작성자 : 해경',
                '등록일 : 2024-09-23 19:29:00',
                '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
            ],
        },
        {
            title: '부산남항우양냉장 일대 제201연창호 오염사고',
            details: [
                '사고 시각 : 2024-09-23 00:00:00',
                '진행상태 : 진행중',
                '사고위치 : 39.8, 124.4',
                '작성자 : 해경',
                '등록일 : 2024-09-23 19:29:00',
                '서울시 피해보고 : 2024-08-21 23:12:50 인명피해, 형사상 피해',
            ],
        },
    ];
    const toggleKey = (key) => {
        setActiveKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
    };
    return (_jsx("div", { className: `accordion-bottom-table ${isOpen ? 'open' : 'closed'}`, children: _jsxs("div", { className: `bottom-sheet ${isOpen ? 'open' : 'closed'}`, children: [_jsx("div", { className: "sheet-handle", onClick: () => setIsOpen(!isOpen), role: "button", "aria-label": isOpen ? '접기' : '펼치기', tabIndex: 0, onKeyDown: (e) => {
                        if (e.key === 'Enter')
                            setIsOpen(!isOpen);
                    } }), _jsxs("div", { className: "sheet-header", children: [_jsx("span", { children: "\uC0AC\uACE0\uC0C1\uD669" }), _jsx("button", { className: "close-btn", onClick: handleClose, children: _jsx(Icon, { path: mdiClose, size: 1 }) })] }), _jsxs("div", { className: "btn-group", children: [_jsx(Button, { children: "\uC0C1\uD669\uC804\uD30C" }), _jsx(Button, { children: "\uC0C1\uD669\uBCF4\uACE0" }), _jsx(Button, { children: "\uC870\uCE58\uBCF4\uACE0" })] }), _jsx("div", { className: `sheet-content ${isOpen ? 'open' : 'closed'}`, children: _jsx(Accordion, { activeKey: activeKeys, onSelect: (k) => {
                            if (typeof k === 'string') {
                                toggleKey(k);
                            }
                        }, alwaysOpen: true, children: accidentList.map((item, index) => {
                            const eventKey = String(index);
                            const isActive = activeKeys.includes(eventKey);
                            return (_jsxs(Accordion.Item, { eventKey: eventKey, className: "custom-accordion-item", children: [_jsxs(Accordion.Header, { onClick: (e) => {
                                            e.preventDefault();
                                            toggleKey(eventKey);
                                        }, children: [_jsx("span", { className: "accordion-icon", children: _jsx(Icon, { path: isActive ? mdiMinusCircle : mdiPlusCircleOutline, size: 1, color: isActive ? '#008AFF' : '#000000' }) }), _jsx("span", { className: "accordion-title", children: item.title }), _jsx("span", { className: "accordion-right-icon", children: _jsx(Icon, { path: mdiCrosshairsGps, size: 1, color: isActive ? '#008AFF' : '#000000' }) })] }), _jsx(Accordion.Body, { children: _jsx("div", { className: "details-grid", children: item.details.map((detail, i) => (_jsx("div", { className: "detail-item", children: detail }, i))) }) })] }, eventKey));
                        }) }) })] }) }));
};
const BottomTable01 = ({ isShow, setIsShow, windowWidth }) => {
    const handleClose = () => setIsShow(false);
    const isAccordionView = windowWidth <= 991;
    const isModalView = windowWidth >= 992;
    if (!isShow)
        return null;
    const tableContent = (_jsxs(_Fragment, { children: [_jsxs("div", { className: "custom-top-bar d-flex justify-content-between align-items-center mb-2", children: [_jsxs("div", { className: "d-flex align-items-center", children: [_jsx("span", { className: "me-2 fw-bold", children: "\uCD1D 7\uAC74" }), _jsxs(Form.Select, { size: "sm", style: { width: '100px', height: '34px' }, children: [_jsx("option", { children: "7\uAC74" }), _jsx("option", { children: "14\uAC74" }), _jsx("option", { children: "28\uAC74" })] })] }), _jsxs("div", { children: [_jsx(Button, { variant: "primary", size: "sm", className: "me-2 custom-btn", children: "\uC0C1\uD669\uC804\uD30C" }), _jsx(Button, { variant: "success", size: "sm", className: "me-2 custom-btn", children: "\uC0C1\uD669\uBCF4\uACE0" }), _jsx(Button, { variant: "danger", size: "sm", className: "me-2 custom-btn", children: "\uC870\uCE58\uBCF4\uACE0" })] })] }), _jsx("div", { className: "bottom-inline-table", children: _jsxs("table", { className: "table table-bordered table-sm mb-0", children: [_jsx("thead", { className: "table-light", children: _jsxs("tr", { children: [_jsx("th", { children: "\uBC88\uD638" }), _jsx("th", { children: "\uC0AC\uACE0\uBA85" }), _jsx("th", { children: "\uC0AC\uACE0\uC2DC\uAC01" }), _jsx("th", { children: "\uC0AC\uACE0\uC704\uCE58" }), _jsx("th", { children: "\uB4F1\uB85D\uC77C" }), _jsx("th", { children: "\uC0C1\uC138\uB0B4\uC6A9" }), _jsx("th", { children: "\uC9C4\uD589\uC0C1\uD0DC" }), _jsx("th", { children: "\uC791\uC131\uC790" }), _jsx("th", { children: "\uC2E4\uC2DC\uAC04 \uC704\uCE58" })] }) }), _jsx("tbody", { children: [
                                { id: 1, 사고명: '부산 북항5부두 장기계류선박 장성호 침몰', 사고시각: '2024-09-23 00:00:00', 사고위치: '39.8, 124.4', 등록일: '2024-09-23 19:29:00', 상세내용: '서울시 피해보고: 2024-08-21 23:12:50 인명피해, 형사상 피해', 진행상태: '진행중', 작성자: '해경', ['실시간 위치']: _jsx(Icon, { path: mdiCrosshairsGps, size: 1, className: "realtime-icon" }) },
                                { id: 2, 사고명: '부산 북항5부두 해양오염사고', 사고시각: '2024-09-23 00:00:00', 사고위치: '39.8, 124.4', 등록일: '2024-09-23 19:29:00', 상세내용: '서울시 피해보고: 2024-08-21 23:12:50 인명피해, 형사상 피해', 진행상태: '진행중', 작성자: '해경', ['실시간 위치']: _jsx(Icon, { path: mdiCrosshairsGps, size: 1, className: "realtime-icon" }) },
                                { id: 3, 사고명: 'gs칼텍스 해양오염사고', 사고시각: '2024-09-23 00:00:00', 사고위치: '39.8, 124.4', 등록일: '2024-09-23 19:29:00', 상세내용: '서울시 피해보고: 2024-08-21 23:12:50 인명피해, 형사상 피해', 진행상태: '진행중', 작성자: '해경', ['실시간 위치']: _jsx(Icon, { path: mdiCrosshairsGps, size: 1, className: "realtime-icon" }) },
                                { id: 4, 사고명: '여수 백야도 선착장 인근해상 해양오염', 사고시각: '2024-09-23 00:00:00', 사고위치: '39.8, 124.4', 등록일: '2024-09-23 19:29:00', 상세내용: '서울시 피해보고: 2024-08-21 23:12:50 인명피해, 형사상 피해', 진행상태: '진행중', 작성자: '해경', ['실시간 위치']: _jsx(Icon, { path: mdiCrosshairsGps, size: 1, className: "realtime-icon" }) },
                            ].map((row) => (_jsxs("tr", { children: [_jsx("td", { children: row.id }), _jsx("td", { children: row.사고명 }), _jsx("td", { children: row.사고시각 }), _jsx("td", { children: row.사고위치 }), _jsx("td", { children: row.등록일 }), _jsx("td", { children: row.상세내용 }), _jsx("td", { children: row.진행상태 }), _jsx("td", { children: row.작성자 }), _jsx("td", { children: row['실시간 위치'] })] }, row.id))) })] }) }), _jsx("div", { className: "pagination-group mt-3", children: _jsxs(Pagination, { size: "sm", children: [_jsx(Pagination.First, {}), _jsx(Pagination.Prev, {}), _jsx(Pagination.Item, { children: 1 }), _jsx(Pagination.Ellipsis, {}), _jsx(Pagination.Item, { children: 10 }), _jsx(Pagination.Item, { children: 11 }), _jsx(Pagination.Item, { active: true, children: 12 }), _jsx(Pagination.Item, { children: 13 }), _jsx(Pagination.Item, { disabled: true, children: 14 }), _jsx(Pagination.Ellipsis, {}), _jsx(Pagination.Item, { children: 20 }), _jsx(Pagination.Next, {}), _jsx(Pagination.Last, {})] }) })] }));
    return (_jsxs(_Fragment, { children: [isAccordionView && _jsx(BottomAccordionList, { handleClose: handleClose, isShow: isShow }), isModalView && (_jsxs("div", { className: "bottom-table-modal", children: [_jsxs(Modal.Header, { children: [_jsx(Modal.Title, { children: "\uC0AC\uACE0 \uC0C1\uD669" }), _jsx("div", { className: "ms-auto", children: _jsx(Button, { variant: "link-dark", size: "sm", onClick: handleClose, children: _jsx(Icon, { path: mdiClose, size: 1 }) }) })] }), _jsx(Modal.Body, { children: tableContent })] }))] }));
};
export default BottomTable01;
