import {Route, Routes, Navigate} from 'react-router-dom'
import {Home} from './views/Home'
import {SignIn} from './views/SignIn'
import {SignUp} from './views/SignUp'
import User from './views/User'
import {Author} from './views/Author'
import {Genre} from './views/Genre'
import Settings from './views/Settings'
import {Authors} from './views/Authors'
import {Genres} from './views/Genres'
import {Books} from './views/Books'
import {Checkout} from "./views/Checkout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="sign-in" element={<SignIn/>}/>
      <Route path="sign-up" element={<SignUp/>}/>
      <Route path="books" element={<Books/>}/>
      <Route path="authors" element={<Authors/>}/>
      <Route path="authors/:id" element={<Author/>}/>
      <Route path="genres" element={<Genres/>}/>
      <Route path="genres/:id" element={<Genre/>}/>
      <Route path="profile" element={<User/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      {/*<Route path="profile/settings" element={<Settings />} />*/}
      <Route path="*" element={<Navigate replace to="home"/>}/>
    </Routes>
  )
}
