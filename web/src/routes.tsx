import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { NewUser } from './pages/NewUser'
import { Users } from './pages/Users'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Users />}/>
        <Route path='/newUser' element={<NewUser />}/>
      </Switch>
    </BrowserRouter>
  )
}