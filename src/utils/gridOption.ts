/**
 * 설명: 그리드 필드,옵션
 **/

/* 리얼 그리드 필드,컬럼 옵션 */

import { ConfigObject, ValueType } from 'realgrid';

export const sampleGrid = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
    sample07: '7',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
    sample07: '7',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
    sample07: '7',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
    sample07: '7',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
    sample07: '7',
  },
];

export const SAMPLE_FIELDS = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
  { fieldName: 'sample05', dataType: ValueType.TEXT },
  { fieldName: 'sample06', dataType: ValueType.TEXT },
  { fieldName: 'sample07', dataType: ValueType.TEXT },
  { fieldName: 'modify', dataType: ValueType.TEXT },
  { fieldName: 'delete', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '대분류' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '중분류' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '소분류' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '코드명' },
    fieldName: 'sample04',
  },
  {
    name: 'sample05',
    width: '1',
    header: { text: '코드설명' },
    fieldName: 'sample05',
  },
  {
    name: 'sample06',
    width: '1',
    header: { text: '코드순위' },
    fieldName: 'sample06',
  },
  {
    name: 'sample07',
    width: '1',
    header: { text: '사용구분' },
    fieldName: 'sample07',
  },
  {
    name: 'modify',
    fieldName: 'modify',
    width: '1',
    type: 'text',
    header: {
      text: '수정',
    },
    renderer: {
      type: 'html',
      callback: () => {
        return `<button type="button" style='padding: 6px 16px; border: 1px solid #9EB7D2; background-color: #EFF6FF;'>수정</button>`;
      },
    },
  },
  {
    name: 'delete',
    fieldName: 'delete',
    width: '1',
    type: 'text',
    header: {
      text: '삭제',
    },
    renderer: {
      type: 'html',
      callback: () => {
        return `<button type="button" style='padding: 6px 16px; border: 1px solid #9EB7D2; background-color: #EFF6FF;'>삭제</button>`;
      },
    },
  },
];

export const sampleGrid1 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
    sample07: '7',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
    sample07: '7',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
    sample07: '7',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
    sample07: '7',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
    sample07: '7',
  },
];

export const SAMPLE_FIELDS1 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
  { fieldName: 'sample05', dataType: ValueType.TEXT },
  { fieldName: 'sample06', dataType: ValueType.TEXT },
  { fieldName: 'sample07', dataType: ValueType.TEXT },
  { fieldName: 'button', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS1 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: 'ID' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '사용자명' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '조직구조' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '조직과' },
    fieldName: 'sample04',
  },
  {
    name: 'sample05',
    width: '1',
    header: { text: '조직부서' },
    fieldName: 'sample05',
  },
  {
    name: 'sample06',
    width: '1',
    header: { text: '핸드폰번호' },
    fieldName: 'sample06',
  },
  {
    name: 'sample07',
    width: '1',
    header: { text: '이메일' },
    fieldName: 'sample07',
  },
  {
    name: 'button',
    fieldName: 'button',
    width: '1',
    type: 'text',
    header: {
      text: '승인상태',
    },
    renderer: {
      type: 'html',
      callback: () => {
        return `<button type="button" class="btn btn-primary btn-sm mw-80px">승인</button>`;
      },
    },
  },
];

export const sampleGrid2 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
];

export const SAMPLE_FIELDS2 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
  { fieldName: 'groupUser', dataType: ValueType.TEXT },
  { fieldName: 'groupMenu', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS2 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '그룹명' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '정렬순서' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '사용여부' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '그룹설명' },
    fieldName: 'sample04',
  },
  {
    name: 'groupUser',
    width: '1',
    header: { text: '그룹사용자 관리' },
    fieldName: 'groupUser',
    renderer: {
      type: 'html',
      callback: () => {
        return `<button type="button" class="btn btn-outline-primary btn-sm mw-80px">관리</button>`;
      },
    },
  },
  {
    name: 'groupMenu',
    width: '1',
    header: { text: '그룹메뉴권한 관리' },
    fieldName: 'groupMenu',
    renderer: {
      type: 'html',
      callback: () => {
        return `<button type="button" class="btn btn-outline-primary btn-sm mw-80px">관리</button>`;
      },
    },
  },
];

export const sampleGrid3 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
    sample06: '6',
  },
];

export const SAMPLE_FIELDS3 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
  { fieldName: 'sample05', dataType: ValueType.TEXT },
  { fieldName: 'sample06', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS3 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '아이디' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '성명' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '소속기관' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '직책' },
    fieldName: 'sample04',
  },
  {
    name: 'sample05',
    width: '1',
    header: { text: '그룹' },
    fieldName: 'sample05',
  },
  {
    name: 'sample06',
    width: '1',
    header: { text: '상태' },
    fieldName: 'sample06',
  },
];

export const sampleGrid4 = [
  {
    sample01: '1',
    sample02: '2',
  },
  {
    sample01: '1',
    sample02: '2',
  },
  {
    sample01: '1',
    sample02: '2',
  },
  {
    sample01: '1',
    sample02: '2',
  },
];

export const SAMPLE_FIELDS4 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS4 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '메뉴명' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: 'URL' },
    fieldName: 'sample02',
  },
];

export const sampleGrid5 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
  },
];

export const SAMPLE_FIELDS5 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS5 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '권한명' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '허용여부상태' },
    fieldName: 'sample02',
    renderer: {
      type: 'html',
      callback: () => {
        return `<button type="button" class="btn btn-primary btn-sm mw-80px">허용</button>`;
      },
    },
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '설명' },
    fieldName: 'sample03',
  },
];

export const sampleGrid6 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
];

export const SAMPLE_FIELDS6 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
  { fieldName: 'sample05', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS6 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '서비스구분' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '서비스 ID' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '서비스명' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '적용여부' },
    fieldName: 'sample04',
  },
  {
    name: 'sample05',
    width: '1',
    header: { text: '동접제한건수' },
    fieldName: 'sample05',
  },
];

export const sampleGrid7 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
];

export const SAMPLE_FIELDS7 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'modify', dataType: ValueType.TEXT },
  { fieldName: 'delete', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS7 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '일련번호' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: 'IP주소' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '공지 시작일' },
    fieldName: 'sample03',
  },
  {
    name: 'modify',
    fieldName: 'modify',
    width: '1',
    type: 'text',
    header: {
      text: '수정',
    },
    renderer: {
      type: 'html',
      callback: () => {
        return `<button type="button" style='padding: 6px 16px; border: 1px solid #9EB7D2; background-color: #EFF6FF;'>수정</button>`;
      },
    },
  },
  {
    name: 'delete',
    fieldName: 'delete',
    width: '1',
    type: 'text',
    header: {
      text: '삭제',
    },
    renderer: {
      type: 'html',
      callback: () => {
        return `<button type="button" style='padding: 6px 16px; border: 1px solid #9EB7D2; background-color: #EFF6FF;'>삭제</button>`;
      },
    },
  },
];

export const sampleGrid8 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
];

export const SAMPLE_FIELDS8 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS8 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '제목' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '등록자' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '등록일' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '조회수' },
    fieldName: 'sample04',
  },
];

export const sampleGrid9 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
];

export const SAMPLE_FIELDS9 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS9 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '제목' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '등록자' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '등록일' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '조회수' },
    fieldName: 'sample04',
  },
];

export const sampleGrid10 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '5',
  },
];

export const SAMPLE_FIELDS10 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS10 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '일시' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '단계' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '위치' },
    fieldName: 'sample03',
  },
];

export const SAMPLE_FIELDS11 = [
  { fieldName: '5월', dataType: ValueType.TEXT },
  { fieldName: '건수', dataType: ValueType.NUMBER },
];

export const SAMPLE_COLUMNS11 = [
  {
    width: '1',
    name: '5월',
    header: { text: '5월' },
    fieldName: '5월',
  },
  {
    width: '1',
    name: '건수',
    header: { text: '건수' },
    fieldName: '건수',
  },
];

export const sampleGrid12 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
];

export const SAMPLE_FIELDS12 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS12 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '지도 리스트' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '등록자' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '등록일' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '사용 ON/OFF' },
    fieldName: 'sample04',
  },
];

export const sampleGrid13 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
    sample07: '4',
    sample08: '4',
    sample09: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
    sample07: '4',
    sample08: '4',
    sample09: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
    sample07: '4',
    sample08: '4',
    sample09: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
    sample07: '4',
    sample08: '4',
    sample09: '4',
  },
];

export const SAMPLE_FIELDS13 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
  { fieldName: 'sample05', dataType: ValueType.TEXT },
  { fieldName: 'sample06', dataType: ValueType.TEXT },
  { fieldName: 'sample07', dataType: ValueType.TEXT },
  { fieldName: 'sample08', dataType: ValueType.TEXT },
  { fieldName: 'sample09', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS13 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '대분류' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '중분류' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '소분류' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '레이어명' },
    fieldName: 'sample04',
  },
  {
    name: 'sample05',
    width: '1',
    header: { text: '표출순위' },
    fieldName: 'sample05',
  },
  {
    name: 'sample06',
    width: '1',
    header: { text: '위치' },
    fieldName: 'sample06',
  },
  {
    name: 'sample07',
    width: '1',
    header: { text: '등록자' },
    fieldName: 'sample07',
  },
  {
    name: 'sample08',
    width: '1',
    header: { text: '등록일' },
    fieldName: 'sample08',
  },
  {
    name: 'sample09',
    width: '1',
    header: { text: '사용 ON/OFF' },
    fieldName: 'sample09',
  },
];

export const sampleGrid14 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
  },
];

export const SAMPLE_FIELDS14 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
  { fieldName: 'sample05', dataType: ValueType.TEXT },
  { fieldName: 'sample06', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS14 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '분류' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '장비명' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '영상장비IP' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '파일형식' },
    fieldName: 'sample04',
  },
  {
    name: 'sample05',
    width: '1',
    header: { text: '촬영위치' },
    fieldName: 'sample05',
  },
  {
    name: 'sample06',
    width: '1',
    header: { text: '메타데이터' },
    fieldName: 'sample06',
  },
];

// [관리자] 수집관리
export const MONITORING_COLLECTION_FIELDS = [
  { fieldName: 'id', dataType: ValueType.TEXT },
  { fieldName: 'depth1', dataType: ValueType.TEXT },
  { fieldName: 'depth2', dataType: ValueType.TEXT },
  { fieldName: 'depth3', dataType: ValueType.TEXT },
  { fieldName: 'depth4', dataType: ValueType.TEXT },
  { fieldName: 'clctName', dataType: ValueType.TEXT },
  ...Array.from({ length: 24 }, (_, i) => ({
    fieldName: `${i}시`,
    dataType: ValueType.TEXT,
  })),
  { fieldName: 'trnsmtCycle', dataType: ValueType.TEXT },
  { fieldName: 'receiveCycle', dataType: ValueType.TEXT },
  { fieldName: 'coloredCells', dataType: ValueType.OBJECT },
  { fieldName: 'jobName', dataType: ValueType.TEXT },
];

// [관리자] 수집관리
export const MONITORING_COLLECTION_COLUMNS: (ConfigObject | string)[] = [
  {
    name: 'depth1',
    fieldName: 'depth1',
    width: '100',
    header: {
      text: '',
    },
    renderer: {
      showTooltip: true,
    },
    mergeRule: { criteria: 'value' },
  },
  {
    name: 'depth2',
    fieldName: 'depth2',
    width: '100',
    header: { text: '신호구분' },
    mergeRule: { criteria: ' value' },
    renderer: {
      showTooltip: true,
    },
  },
  {
    name: 'depth3',
    fieldName: 'depth3',
    width: '100',
    header: { text: '방식' },
    mergeRule: { criteria: ' value' },
    renderer: {
      showTooltip: true,
    },
  },
  {
    name: 'depth4',
    fieldName: 'depth4',
    width: '100',
    header: { text: '위치' },
    mergeRule: { criteria: 'value' },
    renderer: {
      showTooltip: true,
    },
  },
  {
    name: 'clctName',
    fieldName: 'clctName',
    width: '100',
    header: { text: '수집명' },
    mergeRule: { criteria: 'value' },
    renderer: {
      showTooltip: true,
    },
  },
  ...Array.from({ length: 24 }, (_, i) => ({
    name: `${i}시`,
    fieldName: `${i}시`,
    width: '40',
    header: { text: `${i}시` },
    renderer: {
      showTooltip: true,
    },
  })),
  { name: 'jobName', fieldName: 'jobName', width: '240', header: { text: '배치/job' } },
  { name: 'trnsmtCycle', fieldName: 'trnsmtCycle', width: '100', header: { text: '송신주기' } },
  { name: 'receiveCycle', fieldName: 'receiveCycle', width: '100', header: { text: '수신주기' } },
];

export const sampleGrid15 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
  },
];

export const SAMPLE_FIELDS15 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS15 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '이름' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '수집장비명' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: 'IP' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '타입' },
    fieldName: 'sample04',
  },
];

export const sampleGrid16 = [
  {
    sample01: '1',
  },
  {
    sample01: '1',
  },
  {
    sample01: '1',
  },
  {
    sample01: '1',
  },
];

export const SAMPLE_FIELDS16 = [{ fieldName: 'sample01', dataType: ValueType.TEXT }];

export const SAMPLE_COLUMNS16 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '프로세스명' },
    fieldName: 'sample01',
  },
];

export const sampleGrid17 = [
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
    sample07: '4',
    sample08: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
    sample07: '4',
    sample08: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
    sample07: '4',
    sample08: '4',
  },
  {
    sample01: '1',
    sample02: '2',
    sample03: '3',
    sample04: '4',
    sample05: '4',
    sample06: '4',
    sample07: '4',
    sample08: '4',
  },
];

export const SAMPLE_FIELDS17 = [
  { fieldName: 'sample01', dataType: ValueType.TEXT },
  { fieldName: 'sample02', dataType: ValueType.TEXT },
  { fieldName: 'sample03', dataType: ValueType.TEXT },
  { fieldName: 'sample04', dataType: ValueType.TEXT },
  { fieldName: 'sample05', dataType: ValueType.TEXT },
  { fieldName: 'sample06', dataType: ValueType.TEXT },
  { fieldName: 'sample07', dataType: ValueType.TEXT },
  { fieldName: 'sample08', dataType: ValueType.TEXT },
];

export const SAMPLE_COLUMNS17 = [
  {
    name: 'sample01',
    width: '1',
    header: { text: '구분' },
    fieldName: 'sample01',
  },
  {
    name: 'sample02',
    width: '1',
    header: { text: '신호구분' },
    fieldName: 'sample02',
  },
  {
    name: 'sample03',
    width: '1',
    header: { text: '방식' },
    fieldName: 'sample03',
  },
  {
    name: 'sample04',
    width: '1',
    header: { text: '위치' },
    fieldName: 'sample04',
  },
  {
    name: 'sample05',
    width: '1',
    header: { text: '적재위치' },
    fieldName: 'sample05',
  },
  {
    name: 'sample06',
    width: '1',
    header: { text: '테이블' },
    fieldName: 'sample06',
  },
  {
    name: 'sample07',
    width: '1',
    header: { text: '상태' },
    fieldName: 'sample07',
  },
  {
    name: 'sample08',
    width: '1',
    header: { text: '비고' },
    fieldName: 'sample08',
  },
];
