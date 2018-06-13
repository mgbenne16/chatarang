import React from 'react'

import Avatar from './Avatar'

const UserInfo = (props) => {
    return (
        <div
          className='UserInfo'
          style={styles.info}
        >
           <Avatar user={props.user} style={styles.avatar} />
           <div className='user' style={styles.user}>
             {props.user.userName}
           </div>
           <a href='#'>
             <i className='fas fa-sign-out-alt'></i>
           </a>
        </div>
    )
}

const styles ={
    info: {
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
},

avatar: {
    marginRight: '0.5rem',
},

user: {
    flex: 1,
},
}

export default UserInfo