import axios, { AxiosResponse } from "axios";

export const agent = axios.create();

const responseBody = (response: AxiosResponse) => response?.data;
const requests = {
  get: <T>(url: string, params?: {}): Promise<T> =>
    axios.get(url, { params }).then(responseBody),
};
