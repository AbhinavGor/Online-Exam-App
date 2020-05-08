import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');
  const [text7, setText7] = useState('');
  const [text8, setText8] = useState('');
  const [text9, setText9] = useState('');
  const [text10, setText10] = useState('');
  const [text11, setText11] = useState('');
  const [text12, setText12] = useState('');
  const [text13, setText13] = useState('');
  const [text14, setText14] = useState('');
  const [text15, setText15] = useState('');

  let s1 = 0;
    let s2 = 0;
    let s3  = 0;
    let s4 = 0;
  
  let score = s1 + s2 + s3 + s4;

  function checkall(q1,q2,q3,q4){
    const a1 = '3';
    const a2 = 'india';
    const a3='spelling';
    const a4 = 'No';
    if (q1 === a1){
      document.getElementById(a1).innerHTML = 'Correct';
      // document.getElementById('posts').style.visibility = "none";
      const s1 = 1;
    }
    else{
      document.getElementById(a1).innerHTML = 'Wrong';
    }
    if (q2 === a2){
      document.getElementById(a2).innerHTML = 'Correct';
      // document.getElementById('posts').style.visibility = "none";
      const s2=1;
    }else{
      document.getElementById(a2).innerHTML = 'Wrong';
    }
    if (q3 === a3){
      document.getElementById(a3).innerHTML = 'Correct';
      // document.getElementById('posts').style.visibility = "none";
      const s3=1;
    }else{
      document.getElementById(a3).innerHTML = 'Wrong';
    }
    if (q4 === a4){
      document.getElementById(a4).innerHTML = 'Correct';
      // document.getElementById('posts').style.visibility = "none";
      s4 = 1;
    }else{
      document.getElementById(a4).innerHTML = 'Wrong';
    }

    return score;
  }


  return (
    <Fragment>
    <div className='post-form'>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15 });
          setText('');
          checkall(text, text2, text3, text4);
        }}
      >
        <div className='bg-primary p'>
          <h3>Question 1</h3>
        </div><br />
          <h4>1 + 3 = ??</h4>
        <div id='3'><input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text}
          onChange={e => setText(e.target.value)}
          
        /></div><br /><br />
        <div className='bg-primary p'>
          <h3>Question 2</h3>
        </div><br />
        <h4>Delhi is the capital city of _________.</h4>
        <div id='india'><input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text2}
          onChange={e => setText2(e.target.value)} /></div><br /><br />
          <div className='bg-primary p'>
          <h3>Question 3</h3>
        </div><br />
        <h4>Waht is the speeling of speling?</h4>
        <div id='spelling'><input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text3}
          onChange={e => setText3(e.target.value)} /></div><br /><br />
          <div className='bg-primary p'>
          <h3>Question 4</h3>
        </div><br />
        <h4>Is StarTrek better than StarWars?</h4>
        <div id='No'><input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text4}
          onChange={e => setText4(e.target.value)} /></div><br /><br />
          <div className='bg-primary p'>
          <h3>Question 5</h3>
          </div>
        <br />
        <input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text5}
          onChange={e => setText5(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 6</h3>
        </div><br />
        <input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text6}
          onChange={e => setText6(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 7</h3>
        </div><br />
        <input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text7}
          onChange={e => setText7(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 8</h3>
        </div><br />
        <input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text8}
          onChange={e => setText8(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 9</h3>
        </div><br />
        <input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text9}
          onChange={e => setText9(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 10</h3>
        </div><br />
        <input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text10}
          onChange={e => setText10(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 11</h3>
        </div><br />
        <input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text11}
          onChange={e => setText11(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 12</h3>
        </div><br />
        <input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text12}
          onChange={e => setText12(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 13</h3>
        </div><br />
        <input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text13}
          onChange={e => setText13(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 14</h3>
        </div><br />
        <input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text14}
          onChange={e => setText14(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 15</h3>
        </div><br />
        <input
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text15}
          onChange={e => setText15(e.target.value)} /><br /><br />
             
        
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
    <div><strong>Score is : </strong>{ score }</div>
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
