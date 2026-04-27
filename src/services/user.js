export const getUserProfile = async (token) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        error: true,
        message: data.message || "Terjadi kesalahan",
      };
    }

    return {
      error: false,
      data: data.data,
    };
  } catch (err) {
    return {
      error: true,
      message: err.message || "Terjadi kesalahan",
    };
  }
};
