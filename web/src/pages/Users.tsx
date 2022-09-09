import { gql, useMutation, useQuery } from "@apollo/client"
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

export const DELETE_USERS = gql`
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
  }
`

export function Users() {
  const { loading, data } = useQuery(GET_USERS)

  const [deleteUser] = useMutation(DELETE_USERS, {
    refetchQueries: [GET_USERS]
  })

  async function handleDeleteUser(deleteUserId: string) {
    await deleteUser({
      variables: {
        deleteUserId
      }
    })
    alert("User deleted successfully")
  }
  return (
    <div>
      <h2>List of users</h2>
      <Link to='/newUser'>New User +</Link>
      {loading && <span>Loading...</span>}
      {data && data.users.map((user: any) => (
        <div key={user.id}>
          <p>{user.email}</p>
          <p>{user.bio}</p>
          <button
            onClick={() => handleDeleteUser(user.id)}
          >
            Delete user
          </button>
          <p>--------------</p>
        </div>
      ))}
    </div>
  )
}