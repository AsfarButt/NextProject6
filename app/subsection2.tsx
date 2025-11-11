"use client";
import React,{useRef, useState, useEffect} from "react";

type data = {
    name: string,
    description: string,
    totalscore: number,
    obtainedscore: number,
    color: string
}

export default function SubSection2(){
    const [activeindex, setactiveindex] = useState(0);
    const container = useRef<HTMLDivElement | null>(null);

    const Data : data[] = [
        {name: "Active Transport",description: "Remember: requires ATP energy",totalscore: 2,obtainedscore: 0, color: "text-red-700/90"},
        {name: "Mitosis",description: "Nearly there! Don't forget metaphase alignment",totalscore: 6,obtainedscore: 5, color: "text-green-700/90"},
        {name: "Photosynthesis",description: "Excellent! Both light and dark reactions covered",totalscore: 6,obtainedscore: 6, color: "text-green-700/80"},
        {name: "Cell Division",description: "Include spindle fibres for full marks",totalscore: 5,obtainedscore: 3, color: "text-yellow-700/80"},
        {name: "Osmosis",description: "Perfect explanation of water movement across membranes",totalscore: 4,obtainedscore: 4, color: "text-green-700/80"},
        {name: "Diffusion",description: "Good start, mention it's a passive process",totalscore: 3,obtainedscore: 2, color: "text-yellow-700/80"}
    ]

    useEffect(() => {
        const MyInterval = setInterval(() => {
            const element = container.current;
            if(!element) return;
            element.style.animation = "none";
            element.offsetHeight;
            element.style.animation = "ScrollUpAnimation 1s ease-in-out";
            setTimeout(() => {setactiveindex((prev) => (prev+1)%Data.length)},600) ;
        },6500)

        return () => clearInterval(MyInterval);
    },[])


    return(<div className="smallshadowgiver relative m-4 p-4 px-6 w-auto max-w-[300] h-auto rounded-2xl bg-white overflow-hidden">
        <h1 className="relative text-[12px] h-3 leading-none font-bold text-purple-800/80 bg-white z-1">Instant Marking</h1>
        <div className="relative w-full h-auto overflow-hidden" ref={container}>
            <div className="relative flex flex-row justify-between items-center">
                <h1 className="text-[20px] my-2 font-bold text-black/85">{Data[activeindex].name}</h1>
            <div className="font-sans">
                <span className={`text-[36px] font-extrabold ${Data[activeindex].color}`}>{Data[activeindex].obtainedscore}</span>
                <span className="text-[20px] font-bold text-gray-600/60">/{Data[activeindex].totalscore}</span>
            </div>
            </div>
            <h2 className="text-[14px] font-sans font-medium text-gray-600/75">{Data[activeindex].description}</h2>
    </div>
    </div>)
}


