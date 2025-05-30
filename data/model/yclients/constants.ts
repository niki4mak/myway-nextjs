const YCLIENTS_URL = "https://api.yclients.com/api/v1";
const COMPANY_ID = "145220";
const BEARER_TOKEN = "3yjrw8mtjpg6c7sng6mk";
const CONTENT_TYPE = "application/vnd.api.v2+json";

const DEFAULT_HEADERS = {
  "Accept": CONTENT_TYPE,
  "Content-Type": "application/json",
  "Authorization": `Bearer ${BEARER_TOKEN}`
};

const getHeadersWithUserToken = () => ({
  ...DEFAULT_HEADERS,
  "Authorization": `Bearer ${BEARER_TOKEN}, User ${localStorage.getItem("userToken")}`
})

export {
  YCLIENTS_URL,
  COMPANY_ID,
  DEFAULT_HEADERS,
  getHeadersWithUserToken
};