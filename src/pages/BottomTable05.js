import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal, Button, Form, Pagination } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import Modal02 from './Modal02';
const BottomAccordionList = ({ handleClose, isShow, onWriteClick, }) => {
    const [isOpen, setIsOpen] = useState(isShow);
    const [activeKeys, setActiveKeys] = useState([]);
    const accidentList = [
        {
            title: '1',
            details: [
                '서비스구분 : 국토정보플랫폼',
                '제목 : 샘플 제목 001',
                '담당부서 : 국토조사과',
                '등록일자 : 2025-09-23',
                '수정 : 수정',
            ],
        },
        {
            title: '2',
            details: [
                '서비스구분 : 국토정보플랫폼',
                '제목 : 샘플 제목 001',
                '담당부서 : 국토조사과',
                '등록일자 : 2025-09-23',
                '수정 : 수정',
            ],
        },
        {
            title: '3',
            details: [
                '서비스구분 : 국토정보플랫폼',
                '제목 : 샘플 제목 001',
                '담당부서 : 국토조사과',
                '등록일자 : 2025-09-23',
                '수정 : 수정',
            ],
        },
        {
            title: '4',
            details: [
                '서비스구분 : 국토정보플랫폼',
                '제목 : 샘플 제목 001',
                '담당부서 : 국토조사과',
                '등록일자 : 2025-09-23',
                '수정 : 수정',
            ],
        },
        {
            title: '5',
            details: [
                '서비스구분 : 국토정보플랫폼',
                '제목 : 샘플 제목 001',
                '담당부서 : 국토조사과',
                '등록일자 : 2025-09-23',
                '수정 : 수정',
            ],
        },
    ];
    const toggleKey = (key) => {
        setActiveKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
    };
    return (_jsx("div", { className: `accordion-bottom-table ${isOpen ? 'open' : 'closed'}`, children: _jsxs("div", { className: `bottom-sheet ${isOpen ? 'open' : 'closed'}`, children: [_jsx("div", { className: "sheet-handle", onClick: () => setIsOpen(!isOpen), role: "button", "aria-label": isOpen ? '접기' : '펼치기', tabIndex: 0, onKeyDown: (e) => {
                        if (e.key === 'Enter')
                            setIsOpen(!isOpen);
                    } }), _jsxs("div", { className: "sheet-header", children: [_jsx("span", { children: "\uACF5\uC9C0\uC0AC\uD56D" }), _jsx("button", { className: "close-btn", onClick: handleClose, children: _jsx(Icon, { path: mdiClose, size: 1 }) })] }), _jsxs("div", { className: "btn-group", children: [_jsx(Button, { children: "\uC0AD\uC81C" }), _jsx(Button, { onClick: onWriteClick, children: "\uAE00\uC4F0\uAE30" })] }), _jsx("div", { className: "bottom-vertical-table-wrapper", children: _jsx("div", { className: "bottom-vertical-table", children: accidentList.map((item, idx) => (_jsx("table", { className: "table table-bordered table-sm mb-3", children: _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("th", { style: { width: '150px' }, children: _jsx("input", { type: "checkbox", id: `check-${idx}`, className: "me-2", style: { transform: 'scale(1.2)', marginRight: '8px' } }) }), _jsx("td", {})] }), _jsxs("tr", { children: [_jsx("th", { children: "\uBC88\uD638" }), _jsx("td", { children: item.title })] }), _jsxs("tr", { children: [_jsx("th", { children: "\uC11C\uBE44\uC2A4\uAD6C\uBD84" }), _jsx("td", { children: item.details[0].split(' : ')[1] })] }), _jsxs("tr", { children: [_jsx("th", { children: "\uC81C\uBAA9" }), _jsx("td", { children: item.details[1].split(' : ')[1] })] }), _jsxs("tr", { children: [_jsx("th", { children: "\uB2F4\uB2F9\uBD80\uC11C" }), _jsx("td", { children: item.details[2].split(' : ')[1] })] }), _jsxs("tr", { children: [_jsx("th", { children: "\uB4F1\uB85D\uC77C\uC790" }), _jsx("td", { children: item.details[3].split(' : ')[1] })] }), _jsxs("tr", { children: [_jsx("th", { children: "\uC218\uC815" }), _jsx("td", { children: item.details[4].split(' : ')[1] })] })] }) }, idx))) }) })] }) }));
};
const BottomTable05 = ({ isShow, setIsShow, windowWidth }) => {
    const handleClose = () => setIsShow(false);
    const [showModal02, setShowModal02] = useState(false);
    const isAccordionView = windowWidth <= 991;
    const isModalView = windowWidth >= 992;
    if (!isShow)
        return null;
    const tableContent = (_jsxs(_Fragment, { children: [_jsxs("div", { className: "custom-top-bar d-flex justify-content-between align-items-center mb-2", children: [_jsxs("div", { className: "d-flex align-items-center", children: [_jsx("span", { className: "me-2 fw-bold", children: "\uCD1D 7\uAC74" }), _jsxs(Form.Select, { size: "sm", style: { width: '100px', height: '34px' }, children: [_jsx("option", { children: "7\uAC74" }), _jsx("option", { children: "14\uAC74" }), _jsx("option", { children: "28\uAC74" })] })] }), _jsxs("div", { children: [_jsx(Button, { variant: "primary", size: "sm", className: "me-2 custom-btn", children: "\uC0AD\uC81C" }), _jsx(Button, { variant: "success", size: "sm", className: "me-2 custom-btn", onClick: () => setShowModal02(true), children: "\uAE00\uC4F0\uAE30" })] })] }), _jsx("div", { className: "bottom-inline-table", children: _jsxs("table", { className: "table table-bordered table-sm mb-0", children: [_jsx("thead", { className: "table-light", children: _jsxs("tr", { children: [_jsx("th", {}), _jsx("th", { children: "\uBC88\uD638" }), _jsx("th", { children: "\uC11C\uBE44\uC2A4\uAD6C\uBD84" }), _jsx("th", { children: "\uC81C\uBAA9" }), _jsx("th", { children: "\uB2F4\uB2F9\uBD80\uC11C" }), _jsx("th", { children: "\uB4F1\uB85D\uC77C\uC790" }), _jsx("th", { children: "\uC218\uC815" })] }) }), _jsx("tbody", { children: [
                                {
                                    id: 1,
                                    서비스구분: '국토정보플랫폼',
                                    제목: '샘플 제목 001',
                                    담당부서: '국토조사과',
                                    등록일자: '2024-09-23',
                                    수정: '수정',
                                },
                                {
                                    id: 2,
                                    서비스구분: '국토정보플랫폼',
                                    제목: '샘플 제목 001',
                                    담당부서: '국토조사과',
                                    등록일자: '2024-09-23',
                                    수정: '수정',
                                },
                                {
                                    id: 3,
                                    서비스구분: '국토정보플랫폼',
                                    제목: '샘플 제목 001',
                                    담당부서: '국토조사과',
                                    등록일자: '2024-09-23',
                                    수정: '수정',
                                },
                            ].map((row, index) => (_jsxs("tr", { children: [_jsx("td", { style: { verticalAlign: 'middle' }, children: _jsx("input", { type: "checkbox" }) }), _jsx("td", { style: { verticalAlign: 'middle' }, children: index + 1 }), _jsx("td", { style: { verticalAlign: 'middle' }, children: row.서비스구분 }), _jsx("td", { style: { verticalAlign: 'middle' }, children: row.제목 }), _jsx("td", { style: { verticalAlign: 'middle' }, children: row.담당부서 }), _jsx("td", { style: { verticalAlign: 'middle' }, children: row.등록일자 }), _jsx("td", { children: _jsx(Button, { className: "modify-btn", children: "\uC218\uC815" }) })] }, row.id))) })] }) }), _jsx("div", { className: "pagination-group mt-3", children: _jsxs(Pagination, { size: "sm", children: [_jsx(Pagination.First, {}), _jsx(Pagination.Prev, {}), _jsx(Pagination.Item, { children: 1 }), _jsx(Pagination.Ellipsis, {}), _jsx(Pagination.Item, { children: 10 }), _jsx(Pagination.Item, { children: 11 }), _jsx(Pagination.Item, { active: true, children: 12 }), _jsx(Pagination.Item, { children: 13 }), _jsx(Pagination.Item, { disabled: true, children: 14 }), _jsx(Pagination.Ellipsis, {}), _jsx(Pagination.Item, { children: 20 }), _jsx(Pagination.Next, {}), _jsx(Pagination.Last, {})] }) })] }));
    return (_jsxs(_Fragment, { children: [isAccordionView && (_jsx(BottomAccordionList, { handleClose: handleClose, isShow: isShow, onWriteClick: () => setShowModal02(true) })), isModalView && (_jsxs("div", { className: "bottom-table-modal", children: [_jsxs(Modal.Header, { children: [_jsx(Modal.Title, { children: "\uACF5\uC9C0\uC0AC\uD56D" }), _jsx("div", { className: "ms-auto", children: _jsx(Button, { variant: "link-dark", size: "sm", onClick: handleClose, children: _jsx(Icon, { path: mdiClose, size: 1 }) }) })] }), _jsx(Modal.Body, { children: tableContent })] })), _jsx(Modal02, { show: showModal02, onHide: () => setShowModal02(false) })] }));
};
export default BottomTable05;
