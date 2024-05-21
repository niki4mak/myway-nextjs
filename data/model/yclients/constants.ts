import * as process from "node:process";

const YCLIENTS_URL = process.env.YCLIENTS_URL;
const COMPANY_ID = "145220";
const BEARER_TOKEN = process.env.YCLIENTS_BEARER;
const CONTENT_TYPE = "application/vnd.api.v2+json";

const DEFAULT_HEADERS = {
    "Accept": CONTENT_TYPE,
    "Authorization": `Bearer ${BEARER_TOKEN}`
};

export {
    YCLIENTS_URL,
    COMPANY_ID,
    DEFAULT_HEADERS
};