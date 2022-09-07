import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from './Card';

interface IItem {
  id: number;
  rating: number;
  text: string;
}

interface Props {
  item: IItem;
  handleDelete: (x: number) => void;
}
function FeedbackItem({ item, handleDelete }: Props) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState('This is an example of feedback state');
  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple'></FaTimes>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}
export default FeedbackItem;
