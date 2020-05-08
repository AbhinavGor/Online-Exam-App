import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';


const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      
        <img className='round-img' src={avatar} alt='' />
        <h4>{name}</h4>
      
    </div>
    <div>
      <p className='my-1'>{text}</p>
      <p className='my-1'>{text2}</p>
      <p className='my-1'>{text3}</p>
      <p className='my-1'>{text4}</p>
      <p className='my-1'>{text5}</p>
      <p className='my-1'>{text6}</p>
      <p className='my-1'>{text7}</p>
      <p className='my-1'>{text8}</p>
      <p className='my-1'>{text9}</p>
      <p className='my-1'>{text10}</p>
      <p className='my-1'>{text11}</p>
      <p className='my-1'>{text12}</p>
      <p className='my-1'>{text13}</p>
      <p className='my-1'>{text14}</p>
      <p className='my-1'>{text15}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(PostItem);
