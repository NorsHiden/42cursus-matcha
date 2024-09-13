import { GenderEnum } from '../enums/gender.enum';

export default interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: GenderEnum;
  biography: string;
  fame_rating: number;
  gps_latitude: number;
  gps_longitude: number;
  is_email_verified: boolean;
  created_at: Date;
}
