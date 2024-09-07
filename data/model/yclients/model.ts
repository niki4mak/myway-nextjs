interface IResponseJSON {
  success: boolean;
  data: any[];
  meta: any[];
}

interface IYCategory {
  id: number;
  title: string;
  sex: number;
  api_id: number;
  weight: number;
}

interface IYService {
  id: number;
  title: string;
  category_id: number;
  price_min: number;
  price_max: number;
  discount: number;
  comment: string;
  weight: number;
  active: number;
  sex: number;
  image: string;
  prepaid: string,
  seance_length: number;
}

interface IYServicesResponse {
  category: IYCategory[];
  services: IYService[];
}

interface IYMaster {
  id: number;
  name: string;
  specialization: string;
  bookable: boolean;
  weight: number;
  rating: number;
  avatar: string;
  information: string;
  seance_date: string;
  votes_count?: number[];
  comments_count?: number[];
}

type IYMastersResponse = IYMaster[];

interface IYDatesResponse {
  booking_days: Record<number, number[]>;
  booking_dates: number[];
  working_days: Record<number, number[]>;
  working_dates: number[];
}

interface IYSeance {
  time: string;
  seance_length: number;
  datetime: string;
}

type IYTimesResponse = IYSeance[];

interface IYNearestSeancesResponse {
  seance_date: number;
  seances: IYSeance[];
}

interface IYBasicData {
  services: IYServicesResponse;
  masters: IYMastersResponse;
  dates: IYDatesResponse;
}

interface IYAppointment {
  id?: number;
  services?: number[];
  staff_id: number;
  datetime: string | null;
  custom_fields?: Record<string, string>;
}

interface IYCreateBookRecordBody {
  phone: string;
  fullname: string;
  email?: string;
  appointments: IYAppointment[];
  code?: string;
  notify_by_sms?: number;
  notify_by_email?: number;
  comment?: string;
  api_id?: number;
  custom_fields?: Record<string, string>;
}

interface IYCreateBookRecordResponse {
  data: IYCreateBookRecordResponseItem[];
  success: boolean;
  meta: {
    message: string;
  }
}

interface IYCreateBookRecordResponseItem {
  id: number;
  record_id: number;
  record_hash: string;
}

interface IYCheckBookRecordBody {
  appointments: IYAppointment[];
}

interface IYCheckBookRecordResponse {
  data: any;
  success: boolean;
  meta: {
    message: string;
  }
}

interface IYAuthBody {
  phone: string;
  code: string;
  company_id: string;
}

interface IYAuthResponse {
  data: {
    id: number;
    user_token: string;
    "name": string;
    "phone": string;
    "login": string;
    "email": string;
    "avatar": string;
  };
  success: boolean;
  meta: {
    message: string;
  }
}

interface IYBookCodeBody {
  phone: string;
  fullname: string;
}

type IYBookCodeResponse = IYCheckBookRecordResponse;

export type {
  IResponseJSON,
  IYCategory,
  IYService,
  IYServicesResponse,
  IYMaster,
  IYMastersResponse,
  IYDatesResponse,
  IYSeance,
  IYTimesResponse,
  IYNearestSeancesResponse,
  IYBasicData,
  IYCreateBookRecordBody,
  IYAppointment,
  IYCreateBookRecordResponse,
  IYCheckBookRecordBody,
  IYCheckBookRecordResponse,

  IYBookCodeBody,
  IYBookCodeResponse,
  IYAuthBody,
  IYAuthResponse,
}

// {
//   "success": true,
//   "data": {
//   "0": "4aeaca88df39bcaaddc4b9414a2940fe",
//     "id": 21733205,
//     "user_token": "4aeaca88df39bcaaddc4b9414a2940fe",
//     "name": "Test",
//     "phone": "375298648934",
//     "login": "375298648934",
//     "email": "",
//     "avatar": "https://be.cdn.yclients.com/images/no-master.png"
// },
//   "meta": []
// }