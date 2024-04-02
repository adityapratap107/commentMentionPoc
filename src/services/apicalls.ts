/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    DEVICE_TOKEN_URL,
    GET_EVENT_DATE_RANGE_URL,
    LOGIN_TRAIL_URL,
    POST_PASSCODE_URL,
    RESEND_OTP_URL,
    TALENT_TOKEN_URL,
    TALENT_URL,
    TERMS_URL,
    VERIFY_OTP_URL,
    VERIFY_PASSCODE_URL,
    GET_EVENT_CALENDER,
    GET_ATTACHMENT_FOR_EVENT,
    GET_EVENT_DETAIL,
    GET_EVENTS_FOR_MONTHS,
    REGISTER_TALENT_CRM,
  } from "./apiLists";
  import axios from "./axios";
  
  export const getDeviceTokenAPI = ({ queryKey }: any) => {
    const [_key] = queryKey;
    return axios.get(DEVICE_TOKEN_URL);
  };
  
  export const getTalentTokenAPI = ({ queryKey }: any) => {
    const [_key, { talentId, token, deviceId }] = queryKey;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.get(TALENT_TOKEN_URL + `?talentId=${talentId}&deviceId=${deviceId}`, config);
  };
  
  export const postTalentAPI = ({ queryKey }: any) => {
    const [_key, { payload, token }] = queryKey;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.post(TALENT_URL, payload, config);
  };
  
  export const verifyOTPAPI = ({ queryKey }: any) => {
    const [_key, { payload, token }] = queryKey;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.post(VERIFY_OTP_URL, payload, config);
  };
  
  export const resendOTPAPI = ({ queryKey }: any) => {
    const [_key, { payload, token }] = queryKey;
    const { talentId, deviceId } = payload;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.get(
      `${RESEND_OTP_URL}?talentId=${talentId}&deviceId=${deviceId}`,
      config
    );
  };
  
  export const verifyPassCodeAPI = ({ queryKey }: any) => {
    const [_key, { payload, token }] = queryKey;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.post(VERIFY_PASSCODE_URL, payload, config);
  };
  
 
  export const getEventsDateRangeAPI = ({ queryKey }: any) => {
    const [_key, { payload, token }] = queryKey;
    const { talentForeignId, startDate, endDate, pagenumber, pagesize } = payload;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.get(
      `${GET_EVENT_DATE_RANGE_URL}?talentForeignId=${talentForeignId}&startDate=${startDate}&endDate=${endDate}&pagenumber=${pagenumber}&pagesize=${pagesize}`,
      config
    );
  };
  
  export const getEventCalenderAPI = ({ queryKey }: any) => {
    const [_key, { payload, token }] = queryKey;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: payload,
    };
    return axios.get(GET_EVENT_CALENDER, config);
  };
  
  export const getICSContentAPI = ({ queryKey }: any) => {
    const [_key, { ICS_CONTENT_URL }] = queryKey;
    return axios.get(ICS_CONTENT_URL);
  };
  
  export const getAttachmentForEventAPI = ({ queryKey }: any) => {
    const [_key, { payload, token }] = queryKey;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: payload,
    };
    return axios.get(GET_ATTACHMENT_FOR_EVENT, config);
  };
  
  export const getEventDetailsAPI = ({ queryKey }: any) => {
    const [_key, { payload, token }] = queryKey;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: payload,
    };
    return axios.get(GET_EVENT_DETAIL, config);
  };
  
  export const getEventsForMonthsAPI = ({ queryKey }: any) => {
    const [_key, { payload, token }] = queryKey;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: payload,
    };
    return axios.get(GET_EVENTS_FOR_MONTHS, config);
  };
  
  export const registerTalentOnCRM = ({ queryKey }: any) => {
    const [_key, { payload }] = queryKey;
    const { registrationNumber } = payload;
    return axios.get(
      `${REGISTER_TALENT_CRM}?registrationNumber=${registrationNumber}`,
      );
  };
  