import React from 'react'
import Book from './Book';
import { Link } from 'react-router-dom';

function PopularBooks(props) {
  return (
     <div className="flex flex-wrap justify-center gap-36">
       {props.BooksData
          .filter((data) => data.status === "Popular")
          .map((data) => <Book key={data.id} BookDetails={data} />)}
     </div>
    
  )
}

export default PopularBooks;