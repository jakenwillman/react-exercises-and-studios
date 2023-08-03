import React from 'react';
import classes from './BookList.module.css'

export default function BookList() {
   let pageTitle = 
   <div>
   <h2>Great Books</h2>
   </div>

   let book1 = "https://m.media-amazon.com/images/I/519HQF7Vl6L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/512A7JQMGCL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51mk-l90TBL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";

   return (
      <div className={classes.booksDiv}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Harry Potter and the Chamber of Screets" />
         <img src={book2} alt="Harry Potter and the Prisoner of Azkaban" />
         <img src={book3} alt="Harry Potter and the Goblet of Fire" />
      </div>      
   );
}