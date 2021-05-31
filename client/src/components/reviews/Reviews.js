import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";
import { getPosts } from "../../actions/post";

const Reviews = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner /> 
  ) : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      <ReviewForm />
      <div className="posts">
        {posts.map(post => (
          <ReviewItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Reviews.propTypes = {
  getPosts: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  review: state.review
});

export default connect(mapStateToProps, { getPosts })(Reviews);