import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase'; 
const DebugComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, 'users', userId); 
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <h2>User Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        userData ? (
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        ) : (
          <p>No data found.</p>
        )
      )}
    </div>
  );
};

export default DebugComponent;









