import { useContext } from 'react'
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

function Chat () {
  const { data } = useContext(ChatContext)
  const nameUser =
    data.user?.displayName?.charAt(0).toUpperCase() +
    data.user?.displayName?.slice(1)

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <div className='chatInfoHeader'>
          <img
            src={
              data.user?.photoURL
                ? data.user?.photoURL
                : 'https://i.pinimg.com/564x/01/db/20/01db206a4027a54d0ef95ae74ff5b0c9.jpg'
            }
            alt='chat avatar'
          />
          <span>{nameUser || 'User'}</span>
        </div>
        <div className='chatIcons'>
          <img src={Cam} alt='' />
          <img src={Add} alt='' />
          <img src={More} alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
