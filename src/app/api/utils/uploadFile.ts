import {google} from "googleapis";
import {getGoogleAuth} from "@/app/api/utils/getGoogleAuth";
import {PassThrough} from "stream";

export const uploadFile = async (file: File, name: string) => {
  const auth = getGoogleAuth();
  const service = google.drive({version: "v3", auth});
  const folderId = process.env.DRIVE_FOLDER_ID ?? "";
  const fileStream = await file.arrayBuffer();
  const imageType = file.type.replace("image/", "");
  return service.files.create({
    requestBody:{
      mimeType: file.type,
      name: name+"."+imageType,
      parents: [folderId]
    },
    media:{
      mimeType: file.type,
      body: new PassThrough().end(new Uint8Array(fileStream))
    },
  });
};
