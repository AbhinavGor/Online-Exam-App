import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Dashboard = ({
  auth: { user },
}) => {
  useEffect(() => {
  }, []);

  return (
    <Fragment>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {  })(
  Dashboard
);
