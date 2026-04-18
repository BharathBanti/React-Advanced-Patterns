import { useEffect, useState } from 'react';
import { getUser, getUserPosts, updateUser } from '../services/userService';
import UserProfileView from '../components/UserProfileView';

function UserProfileContainer() {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({
    name: '',
    email: '',
    bio: '',
  });

  async function fetchData() {
    try {
      setIsLoading(true);
      setError(null);

      const [user, posts] = await Promise.all([
        getUser(userId),
        getUserPosts(userId),
      ]);

      setUserData(user);
      setUserPosts(posts);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!userId) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  async function handleSave() {
    try {
      setIsLoading(true);

      const updated = await updateUser(userId, updatedUserData);
      setUserData(updated);
      setIsEditing(false);
    } catch (err) {
      setError(err.message || 'Update failed');
    } finally {
      setIsLoading(false);
    }
  }

  function startEditing() {
    setIsEditing(true);
    setUpdatedUserData({
      name: userData?.name || '',
      email: userData?.email || '',
      bio: userData?.bio || '',
    });
  }

  return (
    <UserProfileView
      userId={userId}
      setUserId={setUserId}
      userData={userData}
      userPosts={userPosts}
      isLoading={isLoading}
      error={error}
      isEditing={isEditing}
      updatedUserData={updatedUserData}
      setUpdatedUserData={setUpdatedUserData}
      onSave={handleSave}
      onEdit={startEditing}
    />
  );
}

export default UserProfileContainer;