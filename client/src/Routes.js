import React from 'react';
import Global from './style';
import HeaderContainer from './components/Header';
import MainContainer from './components/Main';
import Footer from './components/Footer';

const Routes = () => (
    <Global>
        <HeaderContainer />
        <MainContainer />
        <Footer />
    </Global>
);

export default Routes;
