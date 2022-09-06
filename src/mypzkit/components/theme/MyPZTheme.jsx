import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FE0000',
    },
    secondary: {
      main: '#FE0000',
    },
  },
});

const MyPZTheme = (props) => {
  const { children } = props;
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default MyPZTheme;
