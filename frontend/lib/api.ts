const API_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export async function login(credentials: { email: string; password: string }) {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: 'include',
  });


  return response;
}

export async function signup(userData: {
  email: string;
  password: string;
}) {
  const response = await fetch(`${API_URL}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Signup failed");
  }

  return response.json();
}


export async function logout() {
  await fetch(`${API_URL}/api/auth/logout`, { method: 'POST', credentials: 'include' });
}

export const checkAuth = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/auth/verify`, {
      method: 'GET',
      credentials: 'include',
    });
    if (response.status === 401) {
      const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/auth/refresh`, {
        method: 'POST',
        credentials: 'include',
      });
      if (refreshResponse.ok) {
        return refreshResponse;
      }
    }

    return response;
  } catch (error) {
    throw new Error('Error during authentication check');
  }
};


export async function createPost(postData: {
  title: string;
  content: string;
}) {
  const response = await fetch(`${API_URL}/api/posts/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include',
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  return response.json();
}

export async function getPosts() {
  const response = await fetch(`${API_URL}/api/posts/posts`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export async function getPostsByAuthor() {
  try {
    const response = await fetch(`${API_URL}/api/posts/posts/author`, {
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch author posts: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.log('Error fetching author posts:', error);
    throw error;
  }
}
