"use client";
import React,{useState, useRef, useEffect} from "react";

type data = {
    description: string,
    completed: string,
    number: number,
    color: string
}

export default function SubSection3(){
    const [activeindex, setactiveindex] = useState(0);
    const container = useRef<HTMLDivElement | null>(null);
    const progressbar = useRef<HTMLDivElement | null>(null);

const Data: data[] = [
    {description: "4.1.2 The periodic table", completed: "6", number: 3, color: "rgba(220, 38, 38, 0.8)"},
    {description: "4.7.1 Adaptations and competition", completed: "18", number: 9, color: "rgba(21, 128, 61, 0.8)"},
    {description: "4.1.1 Cell structure", completed: "12", number: 7, color: "rgba(22, 163, 74, 0.8)"},
    {description: "4.1.3 Transport in cells", completed: "8", number: 4, color: "rgba(234, 179, 8, 0.8)"},
    {description: "4.4.2 Respiration", completed: "15", number: 6, color: "rgba(22, 163, 74, 0.9)"},
    {description: "4.2.1 Current and resistance", completed: "10", number: 8, color: "rgba(5, 150, 105, 0.8)"}
]

    useEffect(() => {
        progressbar.current!.style.width = `${Data[activeindex].number*10}%`;

        const MyInterval = setInterval(() => {
            const element = container.current;
            if(!element) return;
            element.style.animation = "none";
            element.offsetHeight;
            element.style.animation = "ScrollUpAnimation 1s ease-in-out";
            progressbar.current? progressbar.current.style.width = "10%":null;

            setTimeout(() => {
                setactiveindex((prev) => {const nextIndex = (prev+1)%Data.length; console.log("Active Index: ",nextIndex); setTimeout(() => {progressbar.current!.style.width = `${Data[nextIndex].number*10}%`/*; console.log("Complete record: ",Data[nextIndex]);*/},600); return nextIndex});
             },600) ;
        },5000)

        return () => clearInterval(MyInterval);
    },[])

    return(<div className="smallshadowgiver relative m-4 p-4 px-6 w-auto max-w-240 h-auto rounded-2xl bg-white overflow-hidden">
        <h1 className="relative text-[12px] h-3 mb-1 leading-none font-bold text-purple-800/80 bg-white z-1">Your Progress</h1>
        <div className="relative w-full h-auto overflow-hidden" ref={container}>
            <div className="relative w-auto h-auto flex flex-row gap-2 justify-between items-center">
                <span className="flex-none text-[20px] max-w-60 w-[70%] sm:w-auto font-bold text-black/85">{Data[activeindex].description}</span>
                <span className="flex-none text-[46px] font-extrabold font-sans pl-4" style={{color: Data[activeindex].color}}>{Data[activeindex].number}</span>
            </div>
            <div className={`relative w-full h-2 rounded-xl bg-gray-400/20`}>
                <div className="relative h-full rounded-xl w-[10%] transition-all duration-800 ease-ease-in-out" style={{backgroundColor: Data[activeindex].color}} ref={progressbar}/>
            </div>
            <h2 className="text-[13px] font-sans font-medium text-gray-600/75">{Data[activeindex].completed} practice sessions completed</h2>
    </div>
    </div>)
}



















