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
                      <h1>IEEE SSIT</h1>
                      <div className="dash-text-div">
                        <p className="dash-text">
                          Login to get started. <br />
                        </p>
                      </div>
                    </div>
                    <div class = "cta">
                        <Link to='/register'><button className = "cta-select loginSubmit">Register</button></Link>
                        <Link to='/login'><button className = "cta-select loginSubmit">Login</button></Link>
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
