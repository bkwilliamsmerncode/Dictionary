import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';

function DashBoard() {

  const [data, setData] = useState(null)
  const [input, setInput] = useState(null)
  const [definition, setDefintion] = useState(null)


  useEffect(() => {

    axios({
      method: "GET",
      url: "http://localhost:3000/Data/dictionary.json"
    })
      .then(res => setData(res.data))
      .catch(err => console.log('get data error', err))

  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()

    setDefintion(data[input])

  }

  const handleInput = e => {
    setInput(e.target.value)
  }

  return (
    <>
      <div id="main">
        <h1 id='header'>Persevere Dictionary</h1>
        <input type="search" name="serch" placeholder='Enter word for defenition' id="search" onChange={handleInput} />
        <button onClick={(e) => handleSubmit(e)} id='btn' type="click">SUBMIT</button>
      </div>
      <div id='bottom'>
        <br />
        <h3>{input}</h3>
        <br />
        <p>{definition}</p>
      </div>

    </>
  );
}

export default DashBoard;
