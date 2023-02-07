import { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

function Message ({ message }) {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const ref = useRef()

  const hour = message.date
    .toDate()
    .toString()
    .split(' ')
    .slice(4, 5)[0]
    .slice(0, 5)

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [message])

  return (
    <div
      ref={ref}
      className={`message ${
        message.senderId === currentUser.uid && 'owner'
      }`}
    >
      <div className='messageInfo'>
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=''
        />
      </div>
      <div className='messageContent'>
        <p>
          {message.text}
          <span>{hour}</span>
        </p>
        {message.img && <img src={message.img} alt='' />}
      </div>
    </div>
  )
}

export default Message
