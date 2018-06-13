import React from 'react'

import Message from './Message'

const MessageList = (props) => {
    return (
        <div className='MessageList'>
          {
           props.messages.map(msg => <Message key={msg.id} message={msg} />)
          }
        </div>
    )
}

const styles = {
    backgrounColor: 'white',
    flex: '1',
    padding: '2rem 1rem',
}

export default MessageList