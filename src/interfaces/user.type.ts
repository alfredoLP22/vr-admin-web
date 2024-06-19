export interface User {
  fullname: string;
  private: string;
  numberOfHouse: number;
  email: string;
  phoneNumber: string;
  roles?: string[];
  token?: string;
}

export interface UserState {
  residents: User[];
  darkMode: boolean;
  sessionUser: User
}