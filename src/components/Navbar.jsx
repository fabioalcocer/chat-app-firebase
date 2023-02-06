function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Toman Chat</span>
      <div className='user'>
        <img
          src='https://i.pinimg.com/736x/13/24/ea/1324eac9818feca89b9b0c5a4f546a3f.jpg'
          alt=''
        />
        <span>Chifuyu Matsuno</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
