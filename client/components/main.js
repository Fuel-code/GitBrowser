import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [userName, setUserName] = useState('')
  const onChange = (e) => setUserName(e.target.value)

  return (
    <div>
      <button type="button" id="search-button" onClick={() => history.push(`/${userName}`)}>
        Search
      </button>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border-2 border-gray-300"
        type="text"
        id="input-field"
        value={userName}
        onChange={onChange}
      />
    </div>
  )
}

Main.propTypes = {}

export default Main
