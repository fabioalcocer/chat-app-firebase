import { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

function Navbar () {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='user'>
        <div className='userNav'>
          <span className='logo'>Toman Chat</span>
          <div>
            <img
              src='https://i.pinimg.com/736x/13/24/ea/1324eac9818feca89b9b0c5a4f546a3f.jpg'
              alt=''
            />
            <span>Chifuyu Matsuno</span>
          </div>
        </div>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
