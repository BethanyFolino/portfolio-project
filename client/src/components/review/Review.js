import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ReviewItem from "../reviews/ReviewItem";
import CommentForm from "../review/CommentForm";
import CommentItem from "../review/CommentItem";
import { getPost } from "../../actions/post";

const Review = ({ getPost, review: {review, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || review === null ? (
    <Spinner /> 
  ) : ( 
    <Fragment>
      <Link to="/posts" className="btn">
        Back to Posts
      </Link>
      <ReviewItem post={review} showActions={false} />
      <CommentForm postId={review._id} />
      <div className="comments">
      {review.comments.map(comment => (
        <CommentItem key={comment._id} comment={comment} postId={review._id} />
      ))}
      </div>
    </Fragment>
  );
};

Review.propTypes = {
  getPost: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  review: state.review
});

export default connect(mapStateToProps, { getPost })(Review);