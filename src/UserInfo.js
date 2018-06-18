import React from 'react'

import Avatar from './Avatar'
import SignOut from './SignOut'

const UserInfo = ({user, signOut }) => {
    return (
        <div
          className='UserInfo'
          style={styles.info}
        >
          <Avatar user={user} style={styles.avatar} />
          <div className='user' style={styles.user}>
            {user.displayName}
          </div>
          <SignOut signOut={signOut} />
        </div>
    )
}

const UserUpdate = ({ firebase:auth().user }) ;{

user.userUpdate({
  displayName: "You",
  photoURL: "src = Avatar"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
}

const EmailtoUser = ({ firebase:auth().user }) ;{

user.EmailtoUser().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
}

Deleteuser = ({ firebase:auth().user }) ;{

user.delete().then(function() {
  // User deleted.
}).catch(function(error) {
  // An error happened.
});
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