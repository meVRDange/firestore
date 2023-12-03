import './App.css';
import { useEffect, useState ,useRef} from 'react';
import { db } from './firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

function App() {
  const [books, setBooks] = useState([]);

  const [name, setName] = useState('');

  const inputRef = useRef(null);

  const booksRef = collection(db, "Books");

  const handleName = (e) => {
    e.preventDefault()
    var value = inputRef.current.value;
    if (value !== '') {
      setName(value);
    }
    console.log(name)
    saveBook()
  }

  const saveBook = async () => {

    try {
      const docRef = await addDoc(booksRef, { Name: name })
      // console.log("Document written with ID: ", docRef.id);
    }
    catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksRef)
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getBooks()
  }, [])

  
  return (
    <>
      <form onSubmit={handleName}>
        <input type='text' ref={inputRef}/>
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
