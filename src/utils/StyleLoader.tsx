import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function StyleLoader() {
  const location = useLocation();

  const arr = [
    [
      {
        id: '1',
        title: 'title1',
        rules: [
          { filter: 'f1', title: '1-1', bolList: [{ line: [{ stor: '#000000' }] }] },
          { filter: 'f2', title: '2-1', bolList: [{ line: [{ stor: '#000000' }] }] },
          { filter: 'f3', title: '3-1', bolList: [{ line: [{ stor: '#000000' }] }] },
        ],
      },
    ],
    [
      {
        id: '2',
        title: 'title2',
        rules: [
          { filter: 'f4', title: '4-1', bolList: [{ poly: [{ stor: '#000000' }] }] },
          { filter: 'f5', title: '5-1', bolList: [{ poly: [{ stor: '#000000' }] }] },
        ],
      },
    ],
  ];

  const example = [
    {
      id: '1',
      mainTitle: 'title1',
      rules: [
        { filter: 'f1', subTitle: '1-1', stor: '#000000' },
        { filter: 'f2', subTitle: '2-1', stor: '#000000' },
        { filter: 'f3', subTitle: '3-1', stor: '#000000' },
      ],
    },
    {
      id: '2',
      mainTitle: 'title2',
      rules: [
        { filter: 'f4', subTitle: '4-1', stor: '#000000' },
        { filter: 'f5', subTitle: '5-1', stor: '#000000' },
      ],
    },
  ];

  useEffect(() => {
    const isAdminRoute = location.pathname.includes('/admin');

    if (isAdminRoute) {
      import('@/assets/scss/admin-custom.scss');
      import('@/assets/scss/admin-common.scss');
      import('@/assets/scss/admin-font.scss');
    } else {
      import('@/assets/scss/user-custom.scss');
    }
  }, [location.pathname]);

  return null;
}

export default StyleLoader;
