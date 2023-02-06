import { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

function Navbar () {
  const { currentUser } = useContext(AuthContext)
  const nameUser =
    currentUser?.displayName?.charAt(0).toUpperCase() +
    currentUser?.displayName?.slice(1)

  return (
    <div className='navbar'>
      <div className='user'>
        <div className='userNav'>
          <span className='logo'>Toman Chat</span>
          <div>
            <img src={currentUser.photoURL} alt='' />
            <span>{nameUser}</span>
          </div>
        </div>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
