import dayjs from "dayjs";

export const getIsClosedRegisterFrom = ()=> dayjs().isAfter(dayjs("2024-01-01"));
