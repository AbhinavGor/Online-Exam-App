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
    
      <section className='tribal'>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      <p className='dash-text'>
      <div className='img-align'><img className  = 'img-logo' src={require('./TH.JPG')} /></div>
          Online Treasure quest<br /> 
          This is lockdown 3.0.<br />
          You're sick of Netflix and chilling.<br />
          You're Missing college for the first time.<br />
          You're bored in the house and in a house bored 😜<br />
          Take your brain for a fun journey of treasure hunting and problem solving.<br />
          IEEE-SSIT has come up with a fun innovative way to make treasure hunting possible in this time.<br />
          Use your coding skills, test your IQ and be a part of this game.<br /><br />

          The games consists of two stages. <br />
          The first stage tests your IQ.<br />
          Solve 10 clues and puzzles that come your way, answer of each clue leads you to the next. The final answer proceeds you to the second stage<br /><br />

          The second stage tests your coding skills.<br />
          It is hackerank competition. Solve all the questions as soon as you can. The one who completes the game first becomes the winner.<br />
          WELCOME!<br /><br />
      </p>
      </section>
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
