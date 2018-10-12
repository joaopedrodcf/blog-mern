import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import { logout } from '../../actions';

const mapStateToProps = ({ isAuthenticated, email }, ownProps) => ({
    isAuthenticated,
    email,
    ownProps
});

const mapDispatchToProps = dispatch => ({
    logoutRedux: () => {
        dispatch(logout());
    }
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Header)
);
