import React from 'react'

const Avatar = ({user, style}) => {
    const photoURL = user.photoURL || `https://api.adorable.io/avatars/40/${user.email}`
    
    return (
        <div
          className='Avatar'
          style={{
              ...styles,
              ...style,
              backgroundImage: `url(${photoUrl})`,
          }}
        ></div>
    )
}

const styles = {
    height: '40px',
    width: '40px',
    fontSize: '1rem',
    borderRadius: '20px',
    backgroundSize: '40px',
}

export default Avatar