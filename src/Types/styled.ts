interface ITheme {
  colors: {
    bg: string;
    font: string;
    innerPieLegenda: string;
    outerPieLegenda: string;
    dashboardCardIcon: string;
    sideBarBg: string;
  };

  media: {
    XXL: string;
    XL: string;
    LG: string;
    MD: string;
    SM: string;
    XS: string;
  };
}

export default ITheme;
