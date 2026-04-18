import styles from './UserProfileView.module.css';

function UserProfileView({
  userId,
  setUserId,
  userData,
  userPosts,
  isLoading,
  error,
  isEditing,
  updatedUserData,
  setUpdatedUserData,
  onSave,
  onEdit,
}) {
  return (
    <div className={styles.userprofileContainer}>
      <div className={styles.idInput}>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
        />
      </div>

      {!userId ? (
        <p>Enter user Id to start</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className={styles.userProfile}>
            <img src={userData?.avatar} alt={userData?.name} />

            {isEditing ? (
              <>
                <input
                  value={updatedUserData.name}
                  onChange={(e) =>
                    setUpdatedUserData((p) => ({
                      ...p,
                      name: e.target.value,
                    }))
                  }
                />
                <input
                  value={updatedUserData.email}
                  onChange={(e) =>
                    setUpdatedUserData((p) => ({
                      ...p,
                      email: e.target.value,
                    }))
                  }
                />
                <textarea
                  value={updatedUserData.bio}
                  onChange={(e) =>
                    setUpdatedUserData((p) => ({
                      ...p,
                      bio: e.target.value,
                    }))
                  }
                />
                <button onClick={onSave}>Save</button>
              </>
            ) : (
              <>
                <h3>{userData?.name}</h3>
                <p>{userData?.email}</p>
                <p>{userData?.bio}</p>
                <p>
                  <a href={userData.website} className="profile-link">
                    Personal website
                  </a>
                </p>
                <button onClick={onEdit}>Edit</button>
              </>
            )}
          </div>

          <ul className={styles.postList}>
            {userPosts.map((post) => (
              <li key={post.id} className={styles.postItem}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default UserProfileView;
