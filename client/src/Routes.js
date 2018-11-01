import React from 'react';
import { ThemeProvider } from 'styled-components';
import Global from './style';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import Footer from './components/Footer';

const Routes = () => (
    <Global>
        <HeaderContainer />
        <MainContainer />
        <Footer />
    </Global>
);

export default Routes;
