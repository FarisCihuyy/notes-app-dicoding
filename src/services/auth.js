export const login = async (payload) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        error: true,
        message: data.message || "Login gagal",
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

export const register = async (payload) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        error: true,
        message: data.message || "Pendaftaran gagal",
      };
    }

    return {
      error: false,
      data,
      message: "Pendaftaran berhasil! Silahkan login",
    };
  } catch (err) {
    return {
      error: true,
      message: err.message || "Terjadi kesalahan",
    };
  }
};
