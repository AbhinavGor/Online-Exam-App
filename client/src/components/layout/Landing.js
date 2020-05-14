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
      
      <div className='transparent'>
        <h1 className='logo'>Bored again with lockdown 3.0?</h1>
        
        <h1 className='logo'><strong>IEEE SSIT - VIT</strong> brings to you </h1>
        
      </div>
      <div className='landing-main'>
        <div className='lead leadp'>
          Online quiz
        </div>

        <div className='buttons'>
          <Link to='/register'><button className='login' ><div className='def-txt'>Sign Up</div></button></Link>
          <Link to='/login'><button className='login'><div className='def-txt'>Login</div></button></Link>
        </div>
        
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
