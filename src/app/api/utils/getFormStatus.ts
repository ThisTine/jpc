import dayjs from "dayjs";

export const getIsClosedRegisterFrom = ()=> dayjs().isAfter(dayjs("2023-12-31"));
