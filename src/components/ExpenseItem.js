import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>May 12</div>
      <div className='expense-item__description'>
        <h2>Car purchase</h2>
      </div>
      <div className='expense-item__price'>11.0L</div>
    </div>
  );
}

export default ExpenseItem;
