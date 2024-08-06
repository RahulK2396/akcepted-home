import React, { useState, useEffect } from 'react';
import { auth, db } from '../Firebase'; 
import { updatePassword } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userDoc, setUserDoc] = useState(null);

  useEffect(() => {
    const fetchUserDoc = async () => {
      const user = auth.currentUser;

      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDoc(docSnap.data());
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching document:', error);
        }
      }
    };

    fetchUserDoc();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (user) {
      try {
        await updatePassword(user, newPassword);

        
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
          password: newPassword,
        });

        setMessage('Password updated successfully in Firebase Auth and Firestore.');
      } catch (error) {
        setMessage(`Error updating password: ${error.message}`);
      }
    } else {
      setMessage('No authenticated user found.');
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={handlePasswordChange}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Update Password</button>
      </form>
      {message && <p>{message}</p>}
      {userDoc && <div>User Data: {JSON.stringify(userDoc)}</div>}
    </div>
  );
};

export default UpdatePassword;











