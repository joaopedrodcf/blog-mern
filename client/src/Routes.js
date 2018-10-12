import React from 'react';
import { ThemeProvider } from 'styled-components';
import Global from './style';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import Footer from './components/Footer/Footer';
import theme from './theme';

const Routes = () => (
    <ThemeProvider theme={theme}>
        <Global>
            <HeaderContainer />
            <MainContainer />
            <Footer />
        </Global>
    </ThemeProvider>
);

export default Routes;
