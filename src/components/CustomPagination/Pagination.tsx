import React from 'react';

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<Props> = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            {/* <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a> */}
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
   
  );
};

export default Pagination;
