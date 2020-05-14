import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
        <div>
            <section class = "presentation">
                <div class = "introduction">
                    <div class = "intro-text">
                      <h1>IEEE SSIT - VIT</h1>
                      <div className="dash-text-div">
                        <p className="dash-text">
                          Register or Login to get started. <br />
                        </p>
                      </div>
                    </div>
                    <div class = "cta">
                        <Link to='/quiz'><button className = "cta-select loginSubmit">Quiz</button></Link>
                    </div>
                </div>
                <div class="cover">
                    <img src = {require("../dashboard/logo.png")} alt = "logo" />
                </div>
            </section>
            <img class = "big-circle" src = {require("../dashboard/big-eclipse.svg")} alt = "" />
            <img class = "medium-circle" src = {require("../dashboard/mid-eclipse.svg")} alt = "" />
            

        </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
