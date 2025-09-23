const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any[];
}

interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
  plan: string;
  isActive?: boolean;
  createdAt?: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('auth_token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth methods
  async register(userData: {
    username: string;
    email: string;
    password: string;
    fullName?: string;
  }): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    if (response.data) {
      this.setToken(response.data.token);
    }

    return response.data!;
  }

  async login(credentials: {
    username: string;
    password: string;
  }): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (response.data) {
      this.setToken(response.data.token);
    }

    return response.data!;
  }

  async getProfile(): Promise<User> {
    const response = await this.request<{ user: User }>('/auth/profile');
    return response.data!.user;
  }

  async updateProfile(userData: {
    fullName?: string;
    email?: string;
  }): Promise<User> {
    const response = await this.request<{ user: User }>('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });

    return response.data!.user;
  }

  async changePassword(passwordData: {
    currentPassword: string;
    newPassword: string;
  }): Promise<void> {
    await this.request('/auth/change-password', {
      method: 'PUT',
      body: JSON.stringify(passwordData),
    });
  }

  // Token management
  setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

  getToken(): string | null {
    return this.token;
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
export type { User, AuthResponse, ApiResponse };
