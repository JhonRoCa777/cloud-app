export interface InUserLoginDTO {
  email: string;
  password: string;
}

export interface OutUserLoginDTO {
  id: string;
  email: string;
  email_verified_at?: string;
}

export interface UserSolicitudeDTO {
  id: string;
  names: string;
  last_names: string;
  document: string;
}
