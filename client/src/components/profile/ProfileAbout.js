import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({ 
  profile: {
    bio,
    favoritemovie,
    favoritegame,
    favoritetvseries,
    user: { name }
  }
}) => <div className="profile-about bg-light p-2">
{bio && (
  <Fragment>
    <h2 className="text-primary">{name.trim().split(" ")[0]}'s Bio</h2>
    <p>{bio}</p>
    <div className="line"></div>
  </Fragment>
)}
{favoritemovie && (
  <Fragment>
    <h2 className="text-primary">{name.trim().split(" ")[0]}'s Favorite Movie</h2>
    <p>{favoritemovie}</p>
    <div className="line"></div>
  </Fragment>
)}
{favoritegame && (
  <Fragment>
    <h2 className="text-primary">{name.trim().split(" ")[0]}'s Favorite Game</h2>
    <p>{favoritegame}</p>
    <div className="line"></div>
  </Fragment>
)}
{favoritetvseries && (
  <Fragment>
    <h2 className="text-primary">{name.trim().split(" ")[0]}'s Favorite TV Series</h2>
    <p>{favoritetvseries}</p>
    <div className="line"></div>
  </Fragment>
)}
  </div>



ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;