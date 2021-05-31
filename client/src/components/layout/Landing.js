import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Kenzie Flicks</h1>
          <p className="lead">
            {/* this needs to actually display the new lines  */}
            Search for your favorite movies and games, share them
            with your friends, leave a review, or simply check out
            information about your favorite characters !
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Register</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
