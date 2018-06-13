import React from 'react'

const Message = (props) => {
    return (
        <div className='Message'>
          {props.message.userName}: {props.message.body}
        </div>
    )
},

const styles = {
    display: 'flex',
    padding: '0 1rem',
}

export default Message