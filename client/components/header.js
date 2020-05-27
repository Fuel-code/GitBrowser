import React from 'react'
import { useParams } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()

  if (typeof userName !== 'undefined') {
    return (
      <nav className="flex flex-row justify-between flex-wrap bg-teal-500 p-6 text-black font-bold">
        <div id="repository-name" className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <span className="px-4">User:{userName}</span>
        </div>

        <a
          id="go-back"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          href="/"
        >
          New Search
        </a>
      </nav>
    )
  }

  if (typeof userName !== 'undefined' && typeof repositoryName !== 'undefined') {
    return (
      <nav className="flex flex-row justify-between flex-wrap bg-teal-500 p-6 text-black font-bold">
        <div id="descriprion" className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <span className="px-4">README</span>
        </div>
        <a
          id="go-repository-list"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          href="/:userName"
        >
          Back
        </a>
      </nav>
    )
  }
  return (
    <nav className="flex flex-row justify-between flex-wrap bg-teal-500 p-6 text-white font-bold">
      <div className="px-5"> Welcome </div>
    </nav>
  )
}

export default React.memo(Header)
