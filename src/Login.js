import { collection, getDocs, limit, query, setDoc, where } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import { db } from './firebase';

export default function Login() {

    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");

    const usersRef = collection(db, "Users");

    const login = async (e)  =>  {
        e.preventDefault();
        // await setDoc(doc(usersRef, "SF"), {
        //     name: "San Francisco", state: "CA", country: "USA",
        //     capital: false, population: 860000,
        //     regions: ["west_coast", "norcal"] });


        console.log(username,password);
        const q = query(usersRef, where("username", "==", username),limit(1));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const snapshot = querySnapshot.docs[0]
          const userdata =  {...snapshot.data()};  // use only the first document, but there could be more  // now you have a DocumentReference
          console.log(snapshot.id, userdata.welcome_message);
      }
      else {
          // decide what you want to do if the query returns no documents.
      }


    }

  return (
    <div className="flex h-screen items-center justify-center">
    <form onSubmit={login} className="border-1 w- flex max-w-lg flex-col items-center space-y-3 rounded-md bg-green-200 px-5 py-5">
      <p>Login</p>
      <input className="w-60 rounded border p-1" type="text" placeholder="username" onChange={(e) => {setUsername(e.currentTarget.value)} } />
      <input className="mb w-60 rounded border p-1" type="text" placeholder="password" onChange={(e) => {setPassword(e.currentTarget.value)}}/>
      <button className="h-9 w-24 rounded bg-blue-400 text-yellow-50">Login</button>
    </form>
  </div>
  )
}
