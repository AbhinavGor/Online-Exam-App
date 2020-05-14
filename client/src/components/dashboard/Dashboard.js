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
        <div>
            <section class = "presentation">
                <div class = "introduction">
                    <div class = "intro-text">
                        <h1 className="lead">
                          <i className="fas fa-user" /> Welcome {user && user.name}
                      </h1>
                      <div className="dash-text-div">
                        <p className="dash-text">
                          The games consists of two stages. <br />
                          The first stage tests your aptitude.<br />
                          Solve 15  puzzles that come your way. <br />Participants above a certain score will be allowed into the next stage.<br /><br />
                        </p>
                      </div>
                      <div className="dash-text-div">
                        <p className="dash-text-1">
                        The second stage tests your coding skills.<br />
                        It is hackerank competition.<br /> Solve all the questions as soon as you can. <br />
                        The participant with the highest score wins.<br />
                        </p>
                      </div>
                    </div>
                    <div class = "cta">
                        <Link to='/quiz'><button className = "cta-select loginSubmit">Quiz</button></Link>
                    </div>
                </div>
                <div class="cover">
                    <img src = {require("./logo.png")} alt = "logo" />
                </div>
            </section>
            <img class = "big-circle" src = {require("./big-eclipse.svg")} alt = "" />
            <img class = "medium-circle" src = {require("./mid-eclipse.svg")} alt = "" />
            

        </div>
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

export default connect(mapStateToProps, {})(
  Dashboard
);
