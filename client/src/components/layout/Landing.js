import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      {/* <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Developer Connector</h1>
          <p className='lead'>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div> */}
      {/* <div className='transparent'></div> */}
      <div className='landing-main'>
        <h1 class='logo'>Franqly&reg;</h1>
        <div className='lead'>
          Send messages anonymously to your friends.
        </div>

        <div className='buttons'>
          <Link to='/register'><button className='login' ><div className='def-txt'>Sign Up</div></button></Link>
          <Link to='/login'><button className='login'><div className='def-txt'>Login</div></button></Link>
        </div>
        
      </div>
    <div class="footer">
        <h1>&copy;<a href = 'https://abhinavgor.netlify.app/'>Abhinav Gorantla</a> 2020.</h1>
    </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
