export const API_URL = "https://67e7fb1320e3af747c40120e.mockapi.io";

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);

  if (!response.ok) {
    return new Error(response.statusText);
  }
  return await response.json();
}

export async function getUser(id) {
  const response = await fetch(`${API_URL}/users/${id}`);

  if (!response.ok) {
    return new Error(response.statusText);
  }

  return await response.json();
}

export async function createUser(data) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.oke) {
    return new Error(response.statusText);
  }

  return await response.json();
}

export async function updateUser(id, data) {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.oke) {
    return new Error(response.statusText);
  }

  return await response.json();
}

export async function deleteUser(id) {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });

  if (!response.oke) {
    return new Error(response.statusText);
  }

  return await response.json();
}
