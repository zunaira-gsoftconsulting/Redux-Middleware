import React from 'react'
import { useSelector } from 'react-redux'

export default function App() {

  const users = useSelector(state => state.reducer.user)
  const errors = useSelector(state => state.reducer.error)

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }

  return (
    <div style={style.container}>
      <h1>Fetching User data from 'JSON' Placeholder using axios</h1>
      <span>{users}</span>
      <h1>{errors}</h1>
    </div>
  )
}