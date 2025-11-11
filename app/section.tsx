"use client";
import React,{useEffect, useRef, useState} from "react";



export default function Section({data, ChildElement}:{data: string[], ChildElement: React.ComponentType<any>}){
    const [hasAppeared, sethasApppeared] = useState(false);
    const container = useRef<HTMLDivElement | null>(null);

    function PopInFunc(){
        container.current?.classList.remove("translate-y-40","opacity-0");
    }

    useEffect(() => {
        const observer = new IntersectionObserver(([entries]) => {
            if(entries.isIntersecting && !hasAppeared){
                PopInFunc();
                setTimeout(() => {
                    sethasApppeared(true);
                    observer.unobserve(container.current!);
                },50)
            }
            else{
                console.log("it hasnt poped in");
            }
        });
        observer.observe(container.current!);
    },[]);


    return(<div className="shadowgiver relative w-[90%] max-w-260 h-auto p-6 py-8 flex flex-col md:flex-row rounded-4xl translate-y-40 opacity-0 transition-all duration-800 bg-white/85" ref={container}>

        <div className="relative p-4 w-full h-auto">
            <h1 className="text-[12px] md:text-[14px] font-medium font-sans text-purple-600/80">{data[0]}</h1>
            <h1 className="font-bold mt-3 text-[24px] md:text-[28px] lg:text-[30px] leading-7 font-sans text-black/95">{data[1]}</h1>
            <div className="text-[18px] mt-2 text-gray-700/90 font-sans font-normal">{data[2]}</div>
        </div>
            <div className="relative w-full h-auto flex justify-center items-center">
             {hasAppeared && <ChildElement />}
            </div>
    </div>)
}