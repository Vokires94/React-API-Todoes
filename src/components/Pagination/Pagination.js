import React from 'react';
import './Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, CurrentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div className='pagination'>
          <button onClick={() => paginate(CurrentPage-1)} className='page-back'>
              Back
          </button>
        {            
        pageNumbers.map(number => (
            <button key={number} onClick={() => paginate(number)} className='page-link'>
            {number}
            </button>          
        ))}
        <button onClick={() => paginate(CurrentPage+1)} className='page-next'>
              Next
          </button>
      </div>
  );
};

export default Pagination;