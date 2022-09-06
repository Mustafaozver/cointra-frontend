class StorageManager {
  getItem = (key) => {
    if (typeof window === 'undefined') {
      return null;
    }
    return localStorage.getItem(key);
  };

  setItem = (key, value) => {
    if (typeof window === 'undefined') {
      return null;
    }
    return localStorage.setItem(key, value);
  };

  removeItem = (key) => {
    if (typeof window === 'undefined') {
      return null;
    }
    return localStorage.removeItem(key);
  };

  getFeebackDone = () => this.getItem('feedback') || false;

  setFeebackDone = () => this.setItem('feedback', true);

  setToken = (token) => this.setItem('token', token);

  getToken = () => this.getItem('token');

  getBearerToken = () => {
    const token = this.getItem('token');
    if (!token) {
      return '';
    }
    return `Bearer ${this.getItem('token')}`;
  }

  logout = () => {
    this.removeItem('token');
    this.removeItem('user');
  };

  login = (token) => {
    this.setToken(token);
  };

  isLogged = () => !!this.getItem('token');
}

export default new StorageManager();
