import React, {  useRef} from 'react'
import bcrypt from 'bcryptjs'


export default function TestComponent() {
  const inputRef = useRef(null);

  const createHash = () => {
    const password = inputRef.current.value;
    console.log(password);
    const hash = bcrypt.hashSync(password);
    console.log(hash);
  };

  return (
    <>
      <div className="LoginDiv">
        <button className="login">Login</button>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={createHash}>Hash</button>
      </div>
    </>
  );
}
