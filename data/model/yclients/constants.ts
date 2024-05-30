const YCLIENTS_URL = "https://api.yclients.com/api/v1";
const COMPANY_ID = "145220";
const BEARER_TOKEN = "3yjrw8mtjpg6c7sng6mk";
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