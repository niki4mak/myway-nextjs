import {IResponseJSON} from "./model";

const requestWrapper = async (request: Promise<Response>) => {
    const res = await request;
    const json = await res.json() as IResponseJSON;

    return json.data;
}

export { requestWrapper };