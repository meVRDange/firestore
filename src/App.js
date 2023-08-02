import './App.css';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [books, setBooks] = useState([]);

  const [name, setName] = useState('');

  const booksRef = collection(db, "Books");

  const handleName = (e) => {
    e.preventDefault()
    var value = e.target.value;
    console.log(value)
    // if (value !== '') {
    //   setName(value);
    // }
  }

  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksRef)
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(books);
    }
    getBooks()
  }, [])

  return (
    <>
      <form onSubmit={handleName}>
        <input type='text'/>
        <button type='submit'>submit</button>
      </form>
      <h1 >Firestore</h1>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.Name}</h2>
          </div>
        )
      })}
    </>
  );
}

export default App;
