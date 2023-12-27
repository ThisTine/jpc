import {NextRequest} from "next/server";
import {encryptData} from "@/utils/AESEncryption";

export async function GET(request:NextRequest){

  const email = request.nextUrl.searchParams.get("email");
  if(!email){
    return new Response("no email", {status: 400});
  }

  return new Response(encryptData(email), {status: 200});

}
