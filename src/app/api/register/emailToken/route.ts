import {NextRequest} from "next/server";
import {encryptData} from "@/utils/AESEncryption";

export async function GET(request:NextRequest){
  if (process.env.ENV !== "DEV"){
    return new Response("not allow", {status: 403});
  }
  const email = request.nextUrl.searchParams.get("email");
  if(!email){
    return new Response("no email", {status: 400});
  }

  return new Response(encryptData(email), {status: 200});

}
