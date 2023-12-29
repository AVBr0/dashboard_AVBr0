import ITheme from './Types/styled';

const baseTheme: ITheme = {
  colors: {
    bg: '#222b3c',
    font: '#ddd',
    innerPieLegenda: '#8884d8',
    outerPieLegenda: '#82ca9d',
    dashboardCardIcon: 'gray',
    sideBarBg: '#2c374a',
  },

  media: {
    XXL: '(max-width: 1366px)',
    XL: '(max-width: 1200px)',
    LG: '(max-width: 1024px)',
    MD: '(max-width: 768px)',
    SM: '(max-width: 540px)',
    XS: '(max-width: 476px)',
  },
};

export default baseTheme;
