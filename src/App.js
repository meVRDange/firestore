import './App.css';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [books, setBooks] = useState([]);
  const booksRef = collection(db,"Books");

  useEffect(() =>{
    const getBooks = async () => {
      const data = await getDocs(booksRef)
      setBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log(books);
    }
    getBooks()
  }, [])
  return (
    <>
      <h1 >Firestore</h1>
      {}
    </>
  );
}

export default App;
