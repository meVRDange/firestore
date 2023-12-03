import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './firebase';

export default function TestComponent() {

    const booksRef = collection(db, "Books")
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const data = await getDocs(booksRef)
            setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            const obj = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setBooks(obj)
        }
        getBooks()
    }, [])


    return (
    <>
      <h1 >Firestore</h1>
     {books.map((book) => {
        // return (

        //   <div key={book.id}>
        //     <h2>{book.Name}</h2>
        //   </div>

        // )
        console.log(book.Name)
      })}
    </>
  );
}
