import { gql, useQuery } from "@apollo/client"
import { Link } from 'react-router-dom'

export const GET_USERS = gql`
  query Users {
    users {
      id
      email
      bio
    }
  }
`

export function Users() {

  const { loading, data } = useQuery(GET_USERS)
  return (
    <div>
      <h2>List of users</h2>
      <Link to='/newUser'>New User +</Link>
      {loading && <span>Loading...</span>}
      {data && data.users.map((user: any) => (
        <div key={user.id}>
          <p>{user.email}</p>
          <p>{user.bio}</p>
          <p>--------------</p>
        </div>
      ))}
    </div>
  )
}