import React from 'react';
import { IFeedback as Feedback } from '../data/FeedbackData';
import FeedbackItem from './FeedbackItem';

interface Props {
  Items: Feedback['Items'];
  handleDelete: (id: number) => void;
}

function FeedbackList({ Items, handleDelete }: Props) {
  if (!Items || Items.length === 0) {
    return <p>No Feedbacks yet</p>;
  }
  return (
    <div className='feedback-list'>
      {Items.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
export default FeedbackList;
