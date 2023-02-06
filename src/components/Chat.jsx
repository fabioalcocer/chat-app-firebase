import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'

function Chat () {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <div className='chatInfoHeader'>
          <img
            src='https://i.pinimg.com/564x/1f/e0/9a/1fe09ae5910d6de4dc7143c970b52e25.jpg'
            alt='chat avatar'
          />
          <span>Izana</span>
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
