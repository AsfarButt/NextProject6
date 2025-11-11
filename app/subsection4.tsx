"use client";
import React,{useState, useRef, useEffect} from "react";

type data = {
    name: string,
    subject: string,
    nextreview: string,
    reviewinterval: string,
    memorystrength: number,
    color: string
}

export default function SubSection4(){
    const [activeindex, setactiveindex] = useState(0);
    const container = useRef<HTMLDivElement | null>(null);
    const progressbar = useRef<HTMLDivElement | null>(null);

const Data: data[] = [
  {name: "4.3.1 Communicable diseases", subject: "Biology", nextreview: "Tomorrow", reviewinterval: "2 days", memorystrength: 85, color: "rgba(22, 163, 74, 0.9)"},
  {name: "4.1.1 Cell structure", subject: "Biology", nextreview: "Today", reviewinterval: "1 day", memorystrength: 45, color: "rgba(249, 115, 22, 0.8)"},
  {name: "4.5.1 Homeostasis", subject: "Biology", nextreview: "In 5 days", reviewinterval: "1 week", memorystrength: 92, color: "rgba(22, 163, 74, 0.9)"},
  {name: "4.2.1 Current and resistance", subject: "Physics", nextreview: "In 2 days", reviewinterval: "3 days", memorystrength: 78, color: "rgba(202, 138, 4, 0.85)"},
  {name: "4.1.2 The periodic table", subject: "Chemistry", nextreview: "Today", reviewinterval: "1 day", memorystrength: 30, color: "rgba(248, 113, 113, 0.9)"},
  {name: "4.6.1 Reproduction", subject: "Biology", nextreview: "In 1 week", reviewinterval: "2 weeks", memorystrength: 88, color: "rgba(22, 163, 74, 0.8)"},
  {name: "4.7.1 Adaptations and compet...", subject: "Biology", nextreview: "In 3 days", reviewinterval: "4 days", memorystrength: 65, color: "rgba(234, 179, 8, 0.9)"}
];

    useEffect(() => {
        progressbar.current!.style.width = `${Data[activeindex].memorystrength}%`;

        const MyInterval = setInterval(() => {
            const element = container.current;
            if(!element) return;
            element.style.animation = "none";
            element.offsetHeight;
            element.style.animation = "ScrollSideAnimation 1s ease-in-out";
            progressbar.current? progressbar.current.style.width = "10%":null;

            setTimeout(() => {
                setactiveindex((prev) => {const nextIndex = (prev+1)%Data.length; console.log("Active Index: ",nextIndex); setTimeout(() => {progressbar.current!.style.width = `${Data[nextIndex].memorystrength}%`; /*console.log("Complete record: ",Data[nextIndex])*/;},600); return nextIndex});
             },600) ;
        },5500)

        return () => clearInterval(MyInterval);
    },[])

    return(<div className="smallshadowgiver relative m-4 p-4 px-6 w-auto max-w-240 h-auto rounded-2xl bg-white overflow-hidden">
        <h1 className="relative text-[12px] h-3 mb-1 leading-none font-bold text-purple-800/80 bg-white z-1">Review Schedule</h1>
        <div className="relative w-full h-auto" ref={container}>
            <div className="relative w-full flex flex-row items-center justify-between">
                <span className="font-semibold text-[15px]">{Data[activeindex].name}</span>
                <span className={`px-2 ml-4 rounded-xl font-semibold text-[12px] opacity-90 ${(Data[activeindex].subject === "Physics")? ("bg-purple-300/40 text-purple-700/80") : ((Data[activeindex].subject === "Chemistry")? ("bg-blue-300/40 text-blue-700/80") : ("bg-green-300/40 text-green-700/90"))} `}>{Data[activeindex].subject}</span>
            </div>   
            <div className="relative w-full h-full px-2">
                <div className="relative flex mb-1 mt-4 flex-row items-center justify-between">
                    <span className="text-[12px] text-gray-800/80 font-sans">Next Review</span>
                    <span className="text-[12px] font-semibold text-black/95">{Data[activeindex].nextreview}</span>
                </div>   
                <div className="relative flex mb-1 flex-row items-center justify-between">
                    <span className="text-[12px] text-gray-800/80 font-sans">Review Interval</span>
                    <span className="text-[12px] text-purple-600/80 font-semibold">{Data[activeindex].reviewinterval}</span>
                </div>   
                <div className="relative flex mb-2 flex-row items-center justify-between">
                    <span className="text-[12px] text-gray-800/80 font-sans">Memory Strength</span>
                    <span className="text-black font-semibold text-[12px]">{Data[activeindex].memorystrength}%<span className={`relative ml-2 inline-block w-2 h-2 rounded-full`} style={{backgroundColor: Data[activeindex].color}}></span></span>
                </div>   
                <div className={`relative w-full h-1.5 rounded-xl bg-gray-400/20`}>
                    <div className="relative h-full rounded-xl w-[10%] transition-all duration-800 ease-ease-in-out bg-black/60" style={{backgroundColor: Data[activeindex].color}} ref={progressbar}/>
                </div>
            </div>
    </div>
    </div>)
}
// 4.3.1 Communicable diseases   bio   tomorrow  2 days  85
// 4.1.1 Cell structure   bio   today  1 day  45  
// 4.5.1 Homeostasis   bio   5 days  1 week   92
// 4.2.1 Current and resistance  phy    2days  3 days    78
// 4.1.2 The periodic table   chem  today  1 day   30
// 4.6.1 Reproduction   bio   in 1 week  2 weeks    88
// 4.7.1 Adaptations and compet... bio  3 days  4 days   65
















