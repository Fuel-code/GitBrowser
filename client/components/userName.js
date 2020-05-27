import React from 'react'
import { Link } from 'react-router-dom'

const UserName = (props) => {
  return (
    <div>
      {props.repos.map((it) => {
        return (
          <div key={it.name}>
            <Link to={`/${props.userName}/${it.name}`}>{it.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default UserName
