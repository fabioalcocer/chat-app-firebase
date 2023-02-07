import { useContext, useState } from 'react'
import Attach from '../img/attach.png'
import Img from '../img/img.png'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc
} from 'firebase/firestore'
import { db, storage } from '../firebase'
import { v4 as uuid } from 'uuid'
import {
  getDownloadURL,
  ref,
  uploadBytesResumable
} from 'firebase/storage'

function Input () {
  const [text, setText] = useState('')
  const [img, setImg] = useState(null)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid())

      const uploadTask = uploadBytesResumable(storageRef, img)

      uploadTask.on(
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURL) => {
              await updateDoc(doc(db, 'chats', data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  img: downloadURL
                })
              })
            }
          )
        }
      )
    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [data.chatId + '.lastMessage']: {
        text
      },
      [data.chatId + '.date']: serverTimestamp()
    })

    await updateDoc(doc(db, 'userChats', data.user.uid), {
      [data.chatId + '.lastMessage']: {
        text
      },
      [data.chatId + '.date']: serverTimestamp()
    })

    setText('')
    setImg(null)
  }
  return (
    <div className='inputContainer'>
      <div className='input'>
        <input
          type='text'
          placeholder='Type something...'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className='send'>
          <img src={Attach} alt='' />
          <input
            type='file'
            style={{ display: 'none' }}
            id='file'
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor='file'>
            <img src={Img} alt='' />
          </label>
          <button onClick={handleSend}>
            <svg
              className='svg-icon'
              viewBox='0 0 1024 1024'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M729.173333 469.333333L157.845333 226.496 243.52 469.333333h485.674667z m0 85.333334H243.541333L157.824 797.504 729.173333 554.666667zM45.12 163.541333c-12.352-34.986667 22.762667-67.989333 56.917333-53.482666l853.333334 362.666666c34.645333 14.72 34.645333 63.829333 0 78.549334l-853.333334 362.666666c-34.133333 14.506667-69.269333-18.474667-56.917333-53.482666L168.085333 512 45.098667 163.541333z'
                fill=''
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Input
