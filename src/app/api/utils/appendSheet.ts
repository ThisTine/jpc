import {getGoogleAuth} from "@/app/api/utils/getGoogleAuth";
import {google} from "googleapis";

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
        [new Date().toISOString(),
          ...values]
      ]
    }
  });
};
