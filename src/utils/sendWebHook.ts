export const sendWebHook = async (error:string,message:string) => {
  const option = {
    username:"Thistine-Incedient",
    content:`แย่แล้ว @here เรามีปัญหา \n error: ${error} \n data: ${message} \n ถ้า debug ไม่ได้ กรณาตาม @thistine มาแก้`
  };
  const webhook = process.env.WEBHOOK || "";
  const res = await fetch(webhook,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(option)
  });
};
