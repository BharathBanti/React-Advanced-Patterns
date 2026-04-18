const BASE_URL = 'http://localhost:3001';

export async function getUser(userId) {
  const res = await fetch(`${BASE_URL}/users/${userId}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}

export async function getUserPosts(userId) {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  return data.filter((post) => post.userId == userId);
}

export async function updateUser(userId, updatedData) {
  const res = await fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) throw new Error('Update failed');
  return res.json();
}