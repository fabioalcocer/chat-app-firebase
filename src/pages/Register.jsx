import addAvatar from '../img/addAvatar.png'

function Register() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Fabio Chat</span>
          <span className="title">Register</span>
          <form action="">
            <input type="text" placeholder="display name" name="" id="" />
            <input type="email" placeholder="email" name="" id="" />
            <input type="password" placeholder="password" name="" id="" />
            <input style={{display: 'none'}} type="file" name="" id="file" />
            <label htmlFor="file">
              <img src={addAvatar} alt="add avatar" />
              <span>Add a avatar</span>
            </label>
            <button>Sign Up</button>
          </form>
          <p>You do have an account? Log in</p>
        </div>
    </div>
  )
}

export default Register