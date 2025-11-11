"use client";
import React,{useEffect, useRef, useState} from "react";

type Student = {
    name: string, 
    description: string,
    timepassed: string,
    likes: string
}
 
export default function Scrollar({direction, speed}:{direction: number, speed: number}){                      
    const [studentresponse, setstudentresponse] = useState<Student[]>([]);
    const scrollarref = useRef<HTMLDivElement | null>(null);
    const container = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        async function FetchData(){
        const data = await fetch("/studentresponses.json").then((res) => res.json());
        console.log(data);
        setstudentresponse(data);
        }
        FetchData();
    },[])

    useEffect(() => {
        const elements = 27*2;
        const elementwidth = 376;
        const element = scrollarref.current;
        if(!element)   return;

        element.style.animation = "none";
        element.style.transform = `translateX(0px)`;

        const ScrollStart = () => {
            if(!element)   return;
            (direction === 1)? element.style.animation = `ScrollAnimation ${speed}ms linear infinite` : element.style.animation = `ScrollAnimation ${speed}ms linear infinite reverse`;

        }

        const observer = new IntersectionObserver(([target]) => {
            if(target.isIntersecting){
                console.log("it should be visible");
                element.style.animationPlayState = "running";
            }
            else{
                console.log("it should be invisible");
                element.style.animationPlayState = "paused";
            }
        },{threshold: 0.05})

        const parent = container.current;
        if(!parent) return ;
        observer.observe(parent);     // to watch the element

        ScrollStart();
    },[speed])



    return(<div className="relative w-full h-fit" ref={container} >
    <div className="relative w-full h-fit flex flex-row items-center opacity-90" ref={scrollarref} >
            {studentresponse.map((element, index) => (
                <div className="flex-none mx-2 relative h-32 w-90 flex flex-row bg-white rounded-xl shadow-sm shadow-black/10 border-box overflow-hidden" key={index}>
                    {/* img section */}
                    <div className="flex-none relative w-[20%] h-full flex justify-center mt-2">
                        <img src={`/ProfilePics/profpic${(index)%7+1}.png`} alt="Centeral Image" className="m-2 w-9 h-9 rounded-full" />
                    </div>  
                    {/* main content */}
                    <div className="flex-none relative w-[80%] h-full flex flex-col">
                        <h1 className="text-sm mt-4 font-bold text-black/95">{element.name}</h1>
                        <p className="text-[14px] font-semibold text-gray-900/80 pr-6">{element.description}</p>
                        <div className="relative mb-3 w-full h-full flex items-end justify-between">
                            <div className="relative h-auto w-fit">
                                <span className="text-[14px] text-gray-900/80">{element.timepassed}</span>
                                <span className="text-[14px] font-semibold ml-2 text-gray-800/80 cursor-pointer hover:text-gray-900/90">Reply</span>
                            </div>          
                            <div className="relative mr-4 h-auto flex flex-row items-center justify-between cursor-pointer">
                                <div className="flex items-center">
                                    <img src="/heart.png" alt="Heart Image" className="w-4 h-4 opacity-95" />
                                    <h1 className="text-[14px] ml-1 font-bold text-red-600/70">{element.likes}</h1>
                                </div>
                                <img src="/dislike.png" alt="Dislike png" className="ml-4 w-4 h-4 opacity-70" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    </div>)
}