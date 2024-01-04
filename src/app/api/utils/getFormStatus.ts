import dayjs from "dayjs";

export const getIsClosedRegisterFrom = ()=> dayjs().isAfter(dayjs("2024-01-01"));

export const getIsClosedPersonalInfoFrom = ()=> dayjs().isAfter(dayjs("2024-01-04"));

export const getIsClosedPersonalInfoFrom2 = ()=> dayjs().isAfter(dayjs("2024-01-04 22:00"));
