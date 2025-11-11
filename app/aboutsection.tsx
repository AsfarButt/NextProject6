"use client";
import React,{useRef, useEffect, useState} from "react";
import Section from "./section";
import SubSection1 from "./subsection1";
import SubSection2 from "./subsection2";
import SubSection3 from "./subsection3";
import SubSection4 from "./subsection4";

const componentMap: Record<string, React.ComponentType<any>> = {
  SubSection1,
  SubSection2,
  SubSection3,
  SubSection4,
};

export default function AboutSection(){
    const [Data, setData] = useState<string[][]>([]);
    const sectionKeys = ["SubSection1","SubSection2","SubSection3","SubSection4"];

    useEffect(() => {
        async function GetDate(){
            const data = await fetch("/sectiondata.json").then((res) => res.json());
        // console.log("Data is: ",data);
            setData(data);
        }
        GetDate();
    },[])

    return(<div className="relative mt-36 w-full h-auto min-h-150 bg-white/96">
        <div className="relative w-full px-[10%] text-center h-fit flex flex-col justify-center items-center">
            <h1 className="text-[34px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-bold font-sans text-black/95">Personalized Learning That Works</h1>
            <h1 className="text-[18px] mt-1 text-gray-700/70 font-normal font-sans">Advanced features designed to improve your understanding</h1>
        </div>

        <div className="relative mt-16 w-full h-auto flex flex-col gap-12 items-center">
            {Data.map((element, index) => (
            <Section data={element} key={index } ChildElement={componentMap[sectionKeys[index]]}/>   // give it type so that react does not think of it as just string
            ))}
        </div>
    </div>)
}

//like this 
//
// const componentMap: Record<string, React.ComponentType<any>> = {
//   SubSection1,
//   SubSection2,
//   SubSection3,
//   SubSection4,
// };