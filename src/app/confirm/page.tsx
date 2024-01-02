/* eslint-disable indent */
"use client";
import {z} from "zod";
import {personalInfoData} from "@/share/validation/personalInfoData";
import PersonalInfoForm from "@/app/confirm/personalInfoForm";
import { useLayoutEffect, useState} from "react";
import HeroPage from "@/app/confirm/HeroPage";

export interface PersonalInfoFormData
  extends z.infer<typeof personalInfoData> {}

const Page = ()=>{
  const [isLoading, setIsLoading] = useState(true);
  const [fullName, setFullName] = useState<string | null>(null);
  const [token, setToken] = useState<string |null>(null);
  useLayoutEffect(() => {
    if(window){
      const token = new URLSearchParams(window.location.search).get("token");
      setToken(token);
      fetch(`/api/register/personalInfo?emailToken=${token}`)
          .then( async v=>{
            if(!v.ok) return;
            const data = await v.json();
            setFullName(data.name);
            console.log(data);
          })
          .finally(()=>{
        setIsLoading(false);
      });

    }
  }, []);
  if(isLoading){
      return <HeroPage>
          <h1 className="text-h2" >กำลังโหลดข้อมูล</h1>
      </HeroPage>;
  }
  if(!fullName || !token){
      return <HeroPage>
          <h1 className="text-h2 text-red-700" >โหลดข้อมูลผิดพลาด</h1>
          <h2>กรุณาติดต่อพวกเราที่ Facebook หรือ Instagram ของ JPC</h2>
      </HeroPage>;
  }
  return <PersonalInfoForm fullname={fullName} token={token}/>;
};


export default Page;
