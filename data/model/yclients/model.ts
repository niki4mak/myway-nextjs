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
  datetime: Date;
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

type IYCreateBookRecordResponse = IYCreateBookRecordResponseItem[];

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
  IYCheckBookRecordResponse
}