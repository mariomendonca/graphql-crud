import { gql, useMutation } from "@apollo/client"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { GET_USERS } from "./Users"
export function NewUser() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')

  const CREATE_USER = gql`
    mutation CreateUser($email: String, $bio: String, $password: String) {
      createUser(email: $email, bio: $bio, password: $password) {
        email
      }
    }
  `

  const [createUser, { loading, data }] = useMutation(CREATE_USER, {
    variables: {
      email,
      bio,
      password
    },
    refetchQueries: [GET_USERS]
  })

  return (
    <div>
      {loading ? (<span>Loading...</span>) : data ? (
        <>
          <span>Welcome, {data.createUser.email}</span>
          <Link to='/'>Back</Link>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <textarea
            placeholder="Bio"
            onChange={e => setBio(e.target.value)}
            value={bio}
          />
          <button
            onClick={() => createUser()}
          >
            Create
          </button>
        </>
      )}
    </div>
  )
}