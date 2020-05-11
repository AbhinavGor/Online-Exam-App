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
      <div className="dashboard">
        <h1 className="lead">
          <i className="fas fa-user" /> Welcome {user && user.name}
        </h1>
        {/* <div className='img-align'><img className  = 'img-logo' src={require('../dashboard/TH.jpg')} alt="logo" /></div>
      <p className='dash-text'>
      
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
      </p> */}
        <div className="dash-text-div">
          <p className="dash-text">
            The games consists of two stages. <br />
            The first stage tests your aptitude.<br />
            Solve 15  puzzles that come your way. Participants above a certain score will be allowed into the next stage.<br /><br />
          </p>
        </div>

        <button className="dash-quiz">
          Round 1
        </button>

        <div className="dash-text-div">
          <p className="dash-text">
            The second stage tests your coding skills.<br />
          It is hackerank competition. Solve all the questions as soon as you can. 
          The participant with the highest score wins.<br />
          </p>
        </div>
        <button className="dash-quiz">
          Logout
          </button>


      </div>
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

export default connect(mapStateToProps, {})(
  Dashboard
);
