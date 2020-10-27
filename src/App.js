import React, { useState, useEffect } from 'react';
import './App.css';
import Message from "./Message.js"
import { Button } from '@material-ui/core';
import { FormControl, InputLabel, Input } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'ravi', text: 'hey guys'},
    {username: 'adira', text: 'whats up'}
  ]);
  const [username, setUsername] = useState('');

  //useState = variable in REACT
  //useEffect = run code on a condition

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [])

  

  const sendMessage = (event) => {
    event.preventDefault();
    // all the logic to send a message 
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Guys</h1>
      <h2>Welcome {username}</h2>
      <form>
      <FormControl>
        <InputLabel >Enter a message...</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}  />
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map(message => (
          <Message username={username} message={message} />
          
  ))
      }

    </div>
  );
}

export default App;
