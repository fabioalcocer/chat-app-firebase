import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

function Login () {
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Fabio Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='email' name='' id='' />
          <input
            type='password'
            placeholder='password'
            name=''
            id=''
          />
          <button>Sign in</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>
          You don't have an account?{' '}
          <Link to='/register'>Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
