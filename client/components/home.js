import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, useParams } from 'react-router-dom'
import Header from './header'
import Main from './main'
import UserName from './userName'
import Repository from './repositoryName'

const Home = () => {
  const { userName, repositoryName } = useParams()
  const [repos, setRepos] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    if (typeof userName !== 'undefined') {
      axios(`https://api.github.com/users/${userName}/repos`).then((res) => {
        setRepos(res.data)
      })
    }
  }, [userName])

  useEffect(() => {
    if (typeof userName !== 'undefined' && typeof repositoryName !== 'undefined') {
      axios(
        `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`
      ).then((res) => {
        setText(res.data)
      })
    }
  }, [userName, repositoryName])

  return (
    <div>
      <Header />
      <Route exact path="/" component={() => <Main />} />
      <Route
        exact
        path="/:userName"
        component={() => <UserName userName={userName} repos={repos} />}
      />
      <Route exact path="/:userName/:repositoryName" component={() => <Repository text={text} />} />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
