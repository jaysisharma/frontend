const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  async subscribe(email) {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
        if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to subscribe');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
};
