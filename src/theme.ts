interface ThemeAttributes {
  font: {
    light: string;
    regular: string;
    bold: string;
  };
  color: {
    primary: string;
    secondary: string;
    gray: string;
    white: string;
  };
}

export interface ThemeProps {
  theme: ThemeAttributes;
}

const theme: ThemeAttributes = {
  font: {
    light: 'OpenSans_300Light',
    regular: 'OpenSans_400Regular',
    bold: 'OpenSans_700Bold',
  },
  color: {
    primary: '#0d1724',
    secondary: '#1FCD6C',
    gray: '#CFD1D3',
    white: '#FFF',
  },
};

export default theme;
