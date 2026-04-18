import { useEffect, useState } from 'react';

function UserProfile() {
  const [userId, setUserId] = useState(null);
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

  async function handleOnSave() {
    try {
      const res = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: updatedUserData.name,
          email: updatedUserData.email,
          bio: updatedUserData.bio,
        }),
      });
      if (!res.ok) throw new Error('Update failed');

      const data = await res.json();
      setUserData(data);
      setIsEditing(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);
        await fetch(`http://localhost:3001/users/${userId}`)
          .then((res) => res.json())
          .then((data) => setUserData(data));
        await fetch(`http://localhost:3001/posts`)
          .then((res) => res.json())
          .then((data) =>
            setUserPosts(data.filter((post) => post.userId === userId))
          );
      } catch (error) {
        setError(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <div className="userprofile-container">
      <div className="id-input">
        <label htmlFor="userId" className="id-label">
          Enter user Id
        </label>
        <input
          type="text"
          id="userId"
          className="id-input-field"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      {!userId ? (
        <p className="empty-message">Enter user Id to start</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error has occured</p>
      ) : (
        <>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error has occured</p>}
          <div className="user-profile">
            <div className="profile-avatar">
              <img src={userData.avatar} alt={userData.name} />
            </div>
            {isEditing ? (
              <div>
                <input
                  className="id-input-field"
                  type="text"
                  id="name"
                  value={updatedUserData.name}
                  onChange={(e) =>
                    setUpdatedUserData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
                <input
                  className="id-input-field"
                  type="email"
                  id="email"
                  value={updatedUserData.email}
                  onChange={(e) =>
                    setUpdatedUserData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
                <textarea
                  className="id-input-field"
                  name="bio"
                  id="bio"
                  value={updatedUserData.bio}
                  rows={5}
                  onChange={(e) =>
                    setUpdatedUserData((prev) => ({
                      ...prev,
                      bio: e.target.value,
                    }))
                  }
                ></textarea>
                <button className="edit-btn" onClick={handleOnSave}>
                  Save
                </button>
              </div>
            ) : (
              <div className="profile-info">
                <h3 className="profile-name">{userData.name}</h3>
                <p className="profile-email">{userData.email}</p>
                <p className="profile-bio">{userData.bio}</p>

                <div className="connections">
                  <span>Followers: {userData.followers}</span>
                  <span>Following: {userData.following}</span>
                </div>

                <a href={userData.website} className="profile-link">
                  Personal website
                </a>

                <button
                  className="edit-btn"
                  onClick={() => {
                    setIsEditing(true);
                    setUpdatedUserData({
                      name: userData.name || '',
                      email: userData.email || '',
                      bio: userData.bio || '',
                    });
                  }}
                >
                  Edit profile
                </button>
              </div>
            )}
          </div>

          <div className="user-posts">
            <ul className="posts-list">
              {userPosts.map((post, index) => (
                <li key={index} className="post-card">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-content">{post.content}</p>

                  <div className="post-stats">
                    <span>Likes: {post.likes}</span>
                    <span>Comments: {post.comments}</span>
                  </div>

                  <p className="post-tags">{post.tags}</p>
                  <p className="post-readtime">Read time: {post.readTime}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default UserProfile;

// For Professional React, we should avoid the following in the above code
// 1. Biggest Issue: Everything is in ONE component
// 2. Move API Calls to a Service Layer
// 3. Extract Custom Hooks