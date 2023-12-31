import {getGoogleAuth} from "@/app/api/utils/getGoogleAuth";
import {google} from "googleapis";

export const queryEmail = async (email:string)=>{
  const auth = getGoogleAuth();
  const service = google.sheets({version: 'v4', auth});
  const spreadSheetId = process.env.SPREAD_SHEET_ID;
  const data = await service.spreadsheets.values.get({
    spreadsheetId: spreadSheetId,
    range: "'Personal infomation'!A2:D",
    majorDimension:"ROWS"
  });
  const values = data.data.values as string[][];
  let personalInfoData: {email: string, name: string, isRegistered: boolean, team:string} | null = null;
  let ind = 0;
  for(let i = 0; i < values.length; i++){
    if(values[i][0] === email){
      personalInfoData = {email: values[i][0], name: values[i][1], team: values[i][2], isRegistered: !!values[i][3]};
      ind = i;
      break;
    }
  }
  if(!personalInfoData){
    throw new Error("email not found");
  }
  return {...personalInfoData, ind:ind+1};
};
