import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";
import { getPosts } from "../../actions/post";

const Reviews = ({ getPosts, review: { reviews, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner /> 
  ) : (
    <Fragment>
      <h1 className="large text-primary">Reviews</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      <ReviewForm />
      <div className="reviews">
        {reviews.map(review => (
          <ReviewItem key={review._id} review={review} />
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