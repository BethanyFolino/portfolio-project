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
      <ReviewItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
      {post.comments.map(comment => (
        <CommentItem key={comment._id} comment={comment} postId={post._id} />
      ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  review: state.review
});

export default connect(mapStateToProps, { getPost })(Review);