function Search () {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input
          type='text'
          placeholder='Find a user'
        />
      </div>
      <div className='userChat'>
        <img src='https://i.pinimg.com/564x/b2/01/d7/b201d7f2230efb5cb91c717549e8af8c.jpg' alt='' />
        <div className='userChatInfo'>
          <span>Fabio Alcocer</span>
        </div>
      </div>
    </div>
  )
}

export default Search
