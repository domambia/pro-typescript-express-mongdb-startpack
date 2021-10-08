export interface UserPayload {
  id: string;
  name: string;
  email: string;
  country?: string;
  phone: string;
  photo?: string;
  password: string;
  user_type?: string;
  created_at?: Date;
  password_changed?: boolean;
  password_change_token?: string;
  is_admin?: boolean;
  is_approved?: boolean;
  is_active?: boolean;
  activation_code?: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}
