import { useState, useRef } from 'react';

export default function check() {
  const [message, setMessage] = useState('');
  const checkbox = useRef();

  const handleClick = () => {
    if (checkbox.current.checked) {
      setMessage('You know JS');
    } else {
      setMessage("You don't know JS");
    }
  }

  return (
    <div>
      <div id="app">
        <input
          type="checkbox"
          name="js"
          ref={checkbox}
        />

        <label for="js"> JavaScript </label>
        <br />
        <button onClick={handleClick}>Done</button>
        <p>{message}</p>
      </div>
    </div >
  );
}