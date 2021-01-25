/* eslint-disable */
import http from "./http";

export const getCity = (params) => http.get('/cities', params);
export const getArea = (params) => http.get('/area/list', params);
export const getRentingList = (params) => http.get('/renting/list', params);
