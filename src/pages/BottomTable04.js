import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal, Button, Form, Pagination, Dropdown, InputGroup } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClose, mdiTrayArrowDown, mdiMagnify } from '@mdi/js';
const BottomAccordionList = ({ handleClose, isShow, }) => {
    const [isOpen, setIsOpen] = useState(isShow);
    const [activeKeys, setActiveKeys] = useState([]);
    const accidentList = [
        {
            title: 'MOB-1W',
            details: [
                '관할해경 : 부산',
                '기관업체명 : 안마도내연발전소',
                '자원명 : 고압세척기',
                '수량 : 2',
                '단위 : 대',
                '육해상구분 : 해상',
            ],
        },
        {
            title: 'MOB-1W',
            details: [
                '관할해경 : 부산',
                '기관업체명 : 안마도내연발전소',
                '자원명 : 고압세척기',
                '수량 : 2',
                '단위 : 대',
                '육해상구분 : 해상',
            ],
        },
        {
            title: 'MOB-1W',
            details: [
                '관할해경 : 부산',
                '기관업체명 : 안마도내연발전소',
                '자원명 : 고압세척기',
                '수량 : 2',
                '단위 : 대',
                '육해상구분 : 해상',
            ],
        },
        {
            title: 'MOB-1W',
            details: [
                '관할해경 : 부산',
                '기관업체명 : 안마도내연발전소',
                '자원명 : 고압세척기',
                '수량 : 2',
                '단위 : 대',
                '육해상구분 : 해상',
            ],
        },
        {
            title: 'MOB-1W',
            details: [
                '관할해경 : 부산',
                '기관업체명 : 안마도내연발전소',
                '자원명 : 고압세척기',
                '수량 : 2',
                '단위 : 대',
                '육해상구분 : 해상',
            ],
        },
    ];
    const toggleKey = (key) => {
        setActiveKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
    };
    return (_jsx("div", { className: `accordion-bottom-table ${isOpen ? 'open' : 'closed'}`, children: _jsxs("div", { className: `bottom-sheet ${isOpen ? 'open' : 'closed'}`, children: [_jsx("div", { className: "sheet-handle", onClick: () => setIsOpen(!isOpen), role: "button", "aria-label": isOpen ? '접기' : '펼치기', tabIndex: 0, onKeyDown: (e) => {
                        if (e.key === 'Enter')
                            setIsOpen(!isOpen);
                    } }), _jsxs("div", { className: "sheet-header", children: [_jsx("span", { children: "\uC804\uCCB4 \uD574\uACBD\uC790\uC0B0 \uC815\uBCF4" }), _jsx("button", { className: "close-btn", onClick: handleClose, children: _jsx(Icon, { path: mdiClose, size: 1 }) })] }), _jsxs("div", { className: "accordion-filter-group", children: [_jsxs(InputGroup, { size: "sm", className: "me-2", style: { width: '200px' }, children: [_jsx(Form.Control, { placeholder: "\uAC80\uC0C9..." }), _jsx(Button, { variant: "outline-secondary", children: _jsx(Icon, { path: mdiMagnify, size: 1 }) })] }), _jsxs(Dropdown, { className: "accordion-dropdown", children: [_jsx(Dropdown.Toggle, { id: "dropdown-basic", className: "custom-add-btn", children: "\uD574\uACBD\uC790\uC0B0 \uD544\uD130" }), _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { children: "\uAC1C\uC778\uBCF4\uD638\uCC3D\uAD6C" }), _jsx(Dropdown.Item, { children: "\uACE0\uC555\uC138\uCC99\uAE30" }), _jsx(Dropdown.Item, { children: "\uACF5\uAE30\uC555\uCD95\uAE30" }), _jsx(Dropdown.Item, { children: "\uB098\uB178\uB730\uCC44" })] })] }), _jsxs(Dropdown, { className: "accordion-dropdown", children: [_jsx(Dropdown.Toggle, { id: "dropdown-basic", className: "custom-add-btn", children: "\uAD00\uD560\uD574\uACBD \uD544\uD130" }), _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { children: "\uAC15\uB989\uD574\uC591\uACBD\uCC30\uC11C" }), _jsx(Dropdown.Item, { children: "\uAD70\uC0B0\uD574\uC591\uACBD\uCC30\uC11C" }), _jsx(Dropdown.Item, { children: "\uB3D9\uD574\uD574\uC591\uACBD\uCC30\uC11C" }), _jsx(Dropdown.Item, { children: "\uBAA9\uD3EC\uD574\uC591\uACBD\uCC30\uC11C" })] })] }), _jsxs(Button, { className: "police-add-btn-02", onClick: () => {
                                console.log('추가 버튼 클릭!');
                            }, children: [_jsx(Icon, { path: mdiTrayArrowDown, size: 1 }), "\uB2E4\uC6B4\uB85C\uB4DC"] })] }), _jsx("div", { className: "bottom-vertical-table-wrapper", children: _jsx("div", { className: "bottom-vertical-table", children: accidentList.map((item, idx) => (_jsx("table", { className: "table table-bordered table-sm mb-3", children: _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("th", { style: { width: '150px' }, children: "\uD574\uACBD\uC790\uC0B0" }), _jsx("td", { children: item.title })] }), _jsxs("tr", { children: [_jsx("th", { children: "\uAD00\uD560\uD574\uACBD" }), _jsx("td", { children: item.details[0].split(' : ')[1] })] }), _jsxs("tr", { children: [_jsx("th", { children: "\uAE30\uAD00\uC5C5\uCCB4\uBA85" }), _jsx("td", { children: item.details[1].split(' : ')[1] })] }), _jsxs("tr", { children: [_jsx("th", { children: "\uC790\uC6D0\uBA85" }), _jsx("td", { children: item.details[2].split(' : ')[1] })] }), _jsxs("tr", { children: [_jsx("th", { children: "\uC218\uB7C9" }), _jsx("td", { children: item.details[3].split(' : ')[1] })] }), _jsxs("tr", { children: [_jsx("th", { children: "\uB2E8\uC704" }), _jsx("td", { children: item.details[4].split(' : ')[1] })] }), _jsxs("tr", { children: [_jsx("th", { children: "\uC721\uD574\uC0C1\uAD6C\uBD84" }), _jsx("td", { children: item.details[5].split(' : ')[1] })] })] }) }, idx))) }) })] }) }));
};
const BottomTable04 = ({ isShow, setIsShow, windowWidth }) => {
    const handleClose = () => setIsShow(false);
    const isAccordionView = windowWidth <= 991;
    const isModalView = windowWidth >= 992;
    if (!isShow)
        return null;
    const tableContent = (_jsxs(_Fragment, { children: [_jsxs("div", { className: "custom-top-bar d-flex justify-content-between align-items-center mb-2", children: [_jsxs("div", { className: "d-flex align-items-center", children: [_jsx("span", { className: "me-2 fw-bold", children: "\uCD1D 7\uAC74" }), _jsxs(Form.Select, { size: "sm", style: { width: '100px', height: '34px' }, children: [_jsx("option", { children: "7\uAC74" }), _jsx("option", { children: "14\uAC74" }), _jsx("option", { children: "28\uAC74" })] }), _jsxs(Button, { className: "police-add-btn ms-2", onClick: () => {
                                    console.log('추가 버튼 클릭!');
                                }, children: [_jsx(Icon, { path: mdiTrayArrowDown, size: 1 }), "\uB2E4\uC6B4\uB85C\uB4DC"] })] }), _jsxs("div", { className: "d-flex align-items-center", children: [_jsxs(InputGroup, { size: "sm", className: "me-2", children: [_jsx(Form.Control, { style: {
                                            border: '1px solid #000'
                                        }, placeholder: "\uAC80\uC0C9..." }), _jsx(Button, { variant: "outline-secondary", children: _jsx(Icon, { path: mdiMagnify, size: 1 }) })] }), _jsxs(Dropdown, { className: "police-custom-dropdown", children: [_jsx(Dropdown.Toggle, { id: "dropdown-basic", className: "custom-add-btn", children: "\uD574\uACBD\uC790\uC0B0 \uD544\uD130" }), _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { onClick: () => console.log('개인보호창구'), children: "\uAC1C\uC778\uBCF4\uD638\uCC3D\uAD6C" }), _jsx(Dropdown.Item, { onClick: () => console.log('고압세척기'), children: "\uACE0\uC555\uC138\uCC99\uAE30" }), _jsx(Dropdown.Item, { onClick: () => console.log('공기압축기'), children: "\uACF5\uAE30\uC555\uCD95\uAE30" }), _jsx(Dropdown.Item, { onClick: () => console.log('나노뜰채'), children: "\uB098\uB178\uB730\uCC44" })] })] }), _jsxs(Dropdown, { className: "police-custom-dropdown", children: [_jsx(Dropdown.Toggle, { id: "dropdown-basic", className: "custom-add-btn", children: "\uAD00\uD560\uD574\uACBD \uD544\uD130" }), _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { onClick: () => console.log('개인보호창구'), children: "\uAC15\uB989\uD574\uC591\uACBD\uCC30\uC11C" }), _jsx(Dropdown.Item, { onClick: () => console.log('고압세척기'), children: "\uAD70\uC0B0\uD574\uC591\uACBD\uCC30\uC11C" }), _jsx(Dropdown.Item, { onClick: () => console.log('공기압축기'), children: "\uB3D9\uD574\uD574\uC591\uACBD\uCC30\uC11C" }), _jsx(Dropdown.Item, { onClick: () => console.log('공기압축기'), children: "\uBAA9\uD3EC\uD574\uC591\uACBD\uCC30\uC11C" })] })] })] })] }), _jsx("div", { className: "bottom-inline-table", children: _jsxs("table", { className: "table table-bordered table-sm mb-0", children: [_jsx("thead", { className: "table-light", children: _jsxs("tr", { children: [_jsx("th", { children: "\uD574\uACBD\uC790\uC0B0" }), _jsx("th", { children: "\uAD00\uD560\uD574\uACBD" }), _jsx("th", { children: "\uAE30\uAD00\uC5C5\uCCB4\uBA85" }), _jsx("th", { children: "\uC790\uC6D0\uBA85" }), _jsx("th", { children: "\uC218\uB7C9" }), _jsx("th", { children: "\uB2E8\uC704" }), _jsx("th", { children: "\uC721\uD574\uC0C1\uAD6C\uBD84" })] }) }), _jsx("tbody", { children: [
                                {
                                    id: 1,
                                    해경자산: 'MOB-1W',
                                    관할해경: '부산',
                                    기관업체명: '안마도내연발전소',
                                    자원명: '고압세척기',
                                    수량: 2,
                                    단위: '대',
                                    육해상구분: '해상',
                                },
                                {
                                    id: 2,
                                    해경자산: 'MOB-1W',
                                    관할해경: '목포',
                                    기관업체명: '(주)경동탱크터미널',
                                    자원명: '발전기',
                                    수량: 2,
                                    단위: '대',
                                    육해상구분: '해상',
                                },
                                {
                                    id: 3,
                                    해경자산: 'MOB-1W',
                                    관할해경: '부산',
                                    기관업체명: '안마도내연발전소',
                                    자원명: '고압세척기',
                                    수량: 2,
                                    단위: '대',
                                    육해상구분: '해상',
                                },
                                {
                                    id: 4,
                                    해경자산: 'MOB-1W',
                                    관할해경: '목포',
                                    기관업체명: '(주)경동탱크터미널',
                                    자원명: '발전기',
                                    수량: 2,
                                    단위: '대',
                                    육해상구분: '해상',
                                },
                            ].map((row) => (_jsxs("tr", { children: [_jsx("td", { children: row.해경자산 }), _jsx("td", { children: row.관할해경 }), _jsx("td", { children: row.기관업체명 }), _jsx("td", { children: row.자원명 }), _jsx("td", { children: row.수량 }), _jsx("td", { children: row.단위 }), _jsx("td", { children: row.육해상구분 })] }, row.id))) })] }) }), _jsx("div", { className: "pagination-group mt-3", children: _jsxs(Pagination, { size: "sm", children: [_jsx(Pagination.First, {}), _jsx(Pagination.Prev, {}), _jsx(Pagination.Item, { children: 1 }), _jsx(Pagination.Ellipsis, {}), _jsx(Pagination.Item, { children: 10 }), _jsx(Pagination.Item, { children: 11 }), _jsx(Pagination.Item, { active: true, children: 12 }), _jsx(Pagination.Item, { children: 13 }), _jsx(Pagination.Item, { disabled: true, children: 14 }), _jsx(Pagination.Ellipsis, {}), _jsx(Pagination.Item, { children: 20 }), _jsx(Pagination.Next, {}), _jsx(Pagination.Last, {})] }) })] }));
    return (_jsxs(_Fragment, { children: [isAccordionView && _jsx(BottomAccordionList, { handleClose: handleClose, isShow: isShow }), isModalView && (_jsxs("div", { className: "bottom-table-modal", children: [_jsxs(Modal.Header, { children: [_jsx(Modal.Title, { children: "\uC804\uCCB4 \uD574\uACBD\uC790\uC0B0 \uC815\uBCF4" }), _jsx("div", { className: "ms-auto", children: _jsx(Button, { variant: "link-dark", size: "sm", onClick: handleClose, children: _jsx(Icon, { path: mdiClose, size: 1 }) }) })] }), _jsx(Modal.Body, { children: tableContent })] }))] }));
};
export default BottomTable04;
