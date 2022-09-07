import React, { useState } from 'react';
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';

function App(): JSX.Element {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedBack = (id: number) => {
    if (window.confirm('Are you sure...')) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };
  return (
    <>
      <Header text='Hello World' />
      <div className='container'>
        <h1>My App</h1>
        <FeedbackList Items={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}

export default App;
