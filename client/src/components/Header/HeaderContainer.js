import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import { logout } from '../../actions';

const mapStateToProps = ({ user }, ownProps) => ({
    ownProps,
    user
});

const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(logout());
    }
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Header)
);
