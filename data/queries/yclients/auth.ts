import {IYAuthBody, IYAuthResponse, IYBookCodeBody, IYBookCodeResponse} from "../../model/yclients/model";
import {requestWrapperWithMeta} from "../../model/yclients/utils";
import {COMPANY_ID, DEFAULT_HEADERS, YCLIENTS_URL} from "../../model/yclients/constants";

const sendCode = async (body: IYBookCodeBody) => requestWrapperWithMeta(fetch(
  `${YCLIENTS_URL}/book_code/${COMPANY_ID}`,
  {
    method: "POST",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(body)
  }
)) as never as Promise<IYBookCodeResponse>;

const authByCode = async (body: IYAuthBody) => requestWrapperWithMeta(fetch(
  `${YCLIENTS_URL}/user/auth`,
  {
    method: "POST",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(body)
  }
)) as never as Promise<IYAuthResponse>;

export {
  sendCode,
  authByCode
}

/*
* {
    "fullname": "Test",
    "surname": null,
    "patronymic": null,
    "phone": "375298648934",
    "email": "",
    "comment": "testing",
    "custom_fields": {},
    "appointments": [
        {
            "services": [
                15162339
            ],
            "staff_id": 2670147,
            "datetime": "2024-06-30T11:00:00",
            "chargeStatus": "",
            "custom_fields": {},
            "id": 0
        }
    ],
    "bookform_id": 395937,
    "isMobile": false,
    "notify_by_sms": 1,
    "referrer": "",
    "is_charge_required_priority": true,
    "is_support_charge": false,
    "appointments_charges": [
        {
            "id": 0,
            "services": [],
            "prepaid": []
        }
    ],
    "redirect_url": "https://n395937.yclients.com/company/145220/success-order/{recordId}/{recordHash}"
}
*
*
* /user/auth/
*
* {
    "phone": "375298648934",
    "code": "1754",
    "company_id": 145220
}
*
* **/