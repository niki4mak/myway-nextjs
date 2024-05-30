import {COMPANY_ID, DEFAULT_HEADERS, YCLIENTS_URL} from "../../model/yclients/constants";
import {requestWrapper} from "../../model/yclients/utils";
import {
  IYDatesResponse,
  IYMastersResponse,
  IYNearestSeancesResponse,
  IYServicesResponse
} from "../../model/yclients/model";

const getAllAvailableServicesCategories = async () => requestWrapper(fetch(
  `${YCLIENTS_URL}/service_categories/${COMPANY_ID}`,
  {
    method: "GET",
    headers: DEFAULT_HEADERS
  }
));

const getAllAvailableServices = async (queryParams?: Record<string, string>) => requestWrapper(fetch(
  `${YCLIENTS_URL}/book_services/${COMPANY_ID}?${queryParams ? new URLSearchParams(queryParams) : ""}`,
  {
    method: "GET",
    headers: DEFAULT_HEADERS,
  }
)) as never as Promise<IYServicesResponse>;

const getAllAvailableMasters = async () => requestWrapper(fetch(
  `${YCLIENTS_URL}/book_staff/${COMPANY_ID}`,
  {
    method: "GET",
    headers: DEFAULT_HEADERS
  }
)) as never as Promise<IYMastersResponse>;

const getAllAvailableDates = async () => requestWrapper(fetch(
  `${YCLIENTS_URL}/book_dates/${COMPANY_ID}`,
  {
    method: "GET",
    headers: DEFAULT_HEADERS
  }
)) as never as Promise<IYDatesResponse>;

const getNearestAvailableSeances = async (staffId: string, queryParams?: Record<string, string>) => requestWrapper(fetch(
  `${YCLIENTS_URL}/book_staff_seances/${COMPANY_ID}/${staffId}?${queryParams ? new URLSearchParams(queryParams) : ""}`,
  {
    method: "GET",
    headers: DEFAULT_HEADERS
  }
)) as never as Promise<IYNearestSeancesResponse>;

export {
  getAllAvailableServicesCategories,
  getAllAvailableServices,
  getAllAvailableMasters,
  getAllAvailableDates,
  getNearestAvailableSeances,
};