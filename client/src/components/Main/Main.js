import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from './style';
import Home from './Home/Home';
import PostDetailed from './PostDetailed/PostDetailed';
import ContactFormik from './Forms/ContactFormik';
import RegisterFormik from './Forms/RegisterFormik';
import CreatePostFormik from './Forms/CreatePostFormik';
import LoginFormik from './Forms/LoginFormik';

const RouteUnauthenticated = ({ isAuthenticated, ...props }) =>
    !isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;

const RouteAuthenticated = ({ isAuthenticated, ...props }) =>
    isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;

RouteUnauthenticated.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

RouteAuthenticated.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

// Use render instead of component to pass props
const Main = props => (
    <Container>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contactus" component={ContactFormik} />
            <RouteUnauthenticated
                {...props}
                exact
                path="/login"
                render={() => <LoginFormik {...props} />}
            />
            <RouteUnauthenticated
                {...props}
                exact
                path="/register"
                render={() => <RegisterFormik {...props} />}
            />
            <RouteAuthenticated
                {...props}
                exact
                path="/create-post"
                render={() => <CreatePostFormik {...props} />}
            />
            <Route exact path="/post/:id" component={PostDetailed} {...props} />
        </Switch>
    </Container>
);

export default Main;
