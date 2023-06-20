interface Image {
  id: number;
  room: number;
  image_url: string;
  upload_at?: string;
  is_deleted?: boolean;
}
// type for room
interface Room {
  id: number;
  images: Image[];
  house: {
    id: number;
    owner: {
      id: number;
      username: string;
      phonenumber?: string;
    };
    description?: string;
    status?: string;
    subdistrict?: string;
    district?: string;
    city?: string;
    address?: string;
    created_at?: string;
    is_deleted?: false;
  };
  title?: string;
  description?: string;
  status?: string;
  square?: string;
  price?: string;
  electric_price: string;
  water_price: string;
  created_at?: string;
  is_deleted?: boolean;
}

export interface ListRoomProps {
  rooms: Room[] | [];
}

export interface UserInfo {
  user: {
    id: number;
    last_login: string | null;
    username: string;
    email: string;
    phonenumber: string;
    is_user: boolean;
    is_owner: boolean;
    is_superuser: boolean;
    is_staff: boolean;
    is_verified: boolean;
    is_deleted: boolean;
    verified_at?: string;
  };
  access_token: string;
  refresh_token: string;
}

export interface FormRegisterValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phonenumber: string;
  is_user?: boolean | null;
  is_owner?: boolean | null;
}
export interface User {
  id: number;
  last_login: string | null;
  username: string;
  email: string;
  phonenumber: string;
  is_user: boolean;
  is_owner: boolean;
  is_superuser: boolean;
  is_staff: boolean;
  is_verified: boolean;
  is_deleted: boolean;
  verified_at?: string;
}
export interface FormLogin {
  email: string;
  password: string;
}

// type for change password
export interface Password {
    current_password: string,
    new_password: string,
    confirm_new_password: string,
}

