import {getGoogleAuth} from "@/app/api/utils/getGoogleAuth";
import {google} from "googleapis";
import dayjs from "dayjs";

export const appendSheet = (sheetsName:"Basic infomation"|"Academic", values: string[])=>{
  const auth = getGoogleAuth();
  const service = google.sheets({version: 'v4', auth});
  const spreadSheetId = process.env.SPREAD_SHEET_ID;
  return service.spreadsheets.values.append({
    spreadsheetId: spreadSheetId,
    range: sheetsName,
    valueInputOption: "USER_ENTERED",
    requestBody:{
      range: sheetsName,
      values:[
        [dayjs().format("MM/DD/YYYY HH:mm:ss"),
          ...values]
      ]
    }
  });
};

export const updateSheet = (values: string[], ind: number)=>{
  const auth = getGoogleAuth();
  const service = google.sheets({version: 'v4', auth});
  const spreadSheetId = process.env.SPREAD_SHEET_ID;
  return service.spreadsheets.values.update({
    spreadsheetId: spreadSheetId,
    range: `Personal infomation!D${ind}`,
    valueInputOption: "USER_ENTERED",
    requestBody:{
      range: `Personal infomation!C${ind}`,
      values:[
        [dayjs().format("MM/DD/YYYY HH:mm:ss"),
          ...values]
      ]
    }
  });
};
