export const createNote = async (token, payload) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
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

export const getActiveNotes = async (token) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/notes`, {
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

export const getArchivedNotes = async (token) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/notes/archived`, {
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

export const archiveNote = async (token, id) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/notes/${id}/archive`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    if (res.error) {
      return {
        error: true,
        message: data.message || "Terjadi kesalahan",
      };
    }
    return {
      error: false,
      message: data.message,
    };
  } catch (err) {
    return {
      error: true,
      message: err.message || "Terjadi kesalahan",
    };
  }
};

export const deleteNote = async (token, id) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (res.error) {
      return {
        error: true,
        message: data.message || "Terjadi kesalahan",
      };
    }
    return {
      error: false,
      message: data.message,
    };
  } catch (err) {
    return {
      error: true,
      message: err.message || "Terjadi kesalahan",
    };
  }
};
