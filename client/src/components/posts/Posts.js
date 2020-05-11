import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts }, auth }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <Fragment>
      <div className='tribal'>
      {!auth.user.hasposted && (<PostForm />)}
      {auth.user.hasposted && (<h1 className='comp'>You have already attempted the quiz.</h1>)}
      {/* <div className="posts" id='posts'>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div> */}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getPosts })(Posts);
