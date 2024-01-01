import dayjs from "dayjs";

export const getIsClosedRegisterFrom = ()=> dayjs().isAfter(dayjs("2023-12-31"));

export const getIsClosedPersonalInfoFrom = ()=> dayjs().isAfter(dayjs("2024-01-03 15:00"));
