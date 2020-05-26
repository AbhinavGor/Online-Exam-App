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

    function removeForm(){
    document.getElementById('form').innerHTML = '<h1 className="comp">You have already attempted the quiz.</h1>'
  }

  return (
    <Fragment>
    <div className='post-form' id='form'>
    <h1 className='large text-primary quiz-head'><i className='far fa-question-circle'></i> Quiz</h1>
    <h2>All answers should be in uppercase letters.</h2>
      <form
        className='form my-1 form-group'
        onSubmit={e => {
          removeForm();
          e.preventDefault();
          addPost({ text, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15});
          setText('');
        }}
      >
        <div className='bg-primary p'>
          <h3>Question 1</h3>
        </div><br />
          <h4 className='question'>Decode <strong>NXAOWOTMUZ</strong>.</h4>
        <div id='3'><input
        className='answer'
          type='text'
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
        <h4 className='question'>Decrypt <strong>01001000 01000001 01000011 01001011 01000101 01010010</strong>.</h4>
        <div id='india'><input
        className='answer'
          type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text2}
          onChange={e => setText2(e.target.value)} /></div><br /><br />
          <div className='bg-primary p'>
          <h3>Question 3</h3>
        </div><br />
        <h4 className='question'>Decode <strong>5003 6778 6722 7412 2205 8008 4373 1169 3529</strong>.</h4>
        <div id='spelling'><input
        className='answer'
          type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text3}
          onChange={e => setText3(e.target.value)} /></div><br /><br />
          <div className='bg-primary p'>
          <h3>Question 4</h3>
        </div><br />
        <h4 className='question'>Decode <strong>A CEE GDC JI FF CBB</strong>.</h4>
        <div id='No'><input
        className='answer'
          type='text'
          name='text2'
          cols='30'bmaunmdbraai
          rows='2'
          placeholder='Answer this...'
          value={text4}
          onChange={e => setText4(e.target.value)} /></div><br /><br />
          <div className='bg-primary p'>
          <h3>Question 5</h3>
          </div>
        <br />
        <h4 className='question'>Decrypt <strong>bmaunmdbraai</strong>.</h4>
        <input
        className='answer'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text5}
          onChange={e => setText5(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 6</h3>
        </div><br />
        <h4 className='question'>Decode <strong>01001001 01000101 01000101 01000101</strong>.</h4>
        <input
        className='answer'
          type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text6}
          onChange={e => setText6(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 7</h3>
        </div><br />
        <h4 className='question'>In a certain code language COMPUTER is written as RFUVQNPC. How will MEDICINE be written in that code language?</h4>
        <input
        className='answer'
        type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text7}
          onChange={e => setText7(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 8</h3>
        </div><br />
        <h4 className='question'>If Z= 2197 and R= 729. How would J be written in that code?</h4>
        <input
        className='answer'
        type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text8}
          onChange={e => setText8(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 9</h3>
        </div><br />
        <h4 className='question'>In a certain code language<br />
" given  time  simple  plan " is written as ' @E4  &N4  %N5  #E6 '<br />
" tired  solution  plant  great " is written as ' #N8  @D5  %T5  &T5 '<br />
" sick  point  good  turn " is written as ' #K4  %D4  @N4  &T5 '<br />
" garden  sister  phone  team " is written as ' &E5  #R6  %N6  @M4 '<br />
What of the following code is for ' plan '?
</h4>
        <input
        className='answer'
        type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text9}
          onChange={e => setText9(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 10</h3>
        </div><br />
        <h4 className='question'>If E = 5 and READ is coded as 7, then what is the code of 'CRYPTO' ?</h4>
        <input
        className='answer'
        type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text10}
          onChange={e => setText10(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 11</h3>
        </div><br />
        <h4 className='question'>There are 100 gold coins that need to be divided among 5 people - A, B, C, D, E. The division is made by the people themselves, where only one person can make the division. For a division to be successful at least 50% of the people have to approve. If a division does not get approved, then the next person makes the division. The order in which they take turns to make the divisions is A, B, C, D, E. What is the best possible division for A so that he gets the most profit?</h4>
        <input
        className='answer'
        type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text11}
          onChange={e => setText11(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 12</h3>
        </div><br />
        <h4 className='question'>An electronic device when fed with the numbers, rearranges them in a particular order following certain rules. The following is a step-by-step process of rearrangement for the given input of numbers.<br />
        Input    :- 85   16   36   04   19   97   63   09<br />
Step I   :- 97   85   16   36   04   19   63   09<br />
Step II  :- 97   85   63   16   36   04   19   09<br />
Step III :- 97   85   63   36   16   04   19   09<br />
Step IV :- 97   85   63   36   19   16   04   09<br />
Step V  :- 97   85   63   36   19   16   09   04<br />
(for the given input step V is the last step).<br />
 
Which of the following will be the last step for the given input ?<br />
Input :- 03   31   43   22   11   09 

        </h4>
        <input
        className='answer'
        className='answer'
        type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text12}
          onChange={e => setText12(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 13</h3>
        </div><br />
        <h4 className='question'>What should come in place of question mark (?) in the following number series? <br />
 132       156       ?         210          240          272 <br />
</h4>
        <input
        className='answer'
        type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text13}
          onChange={e => setText13(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 14</h3>
        </div><br />
        <h4 className='question'>Choose the wrong number ---- <br />
1, 2, 7, 343, ,40353607<br />
</h4>
        <input
        className='answer'
        type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text14}
          onChange={e => setText14(e.target.value)} /><br /><br />
          <div className='bg-primary p'>
          <h3>Question 15</h3>
        </div><br />
        <h4 className='question'>What is the number of triangles that can be formed whose vertices are the vertices of an octagon but have only one side common with that of octagon?</h4>
        <input
        className='answer'
        type='text'
          name='text2'
          cols='30'
          rows='2'
          placeholder='Answer this...'
          value={text15}
          onChange={e => setText15(e.target.value)} /><br /><br />
             
        
        <div className='submit'><input type='submit' className='btn btn-dark my-1' value='Submit' /></div>
      </form>
    </div>
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addPost }
)(PostForm);
