



export default function Header(){


    return(<div className="sticky top-0 w-full h-14 flex justify-center border-b-2 bg-white/95 border-gray-400/10 z-10">
        <div className="header relative w-full max-w-300 flex justify-between items-center sm:mx-2 md:mx-6 lg:mx-8 xl:mx-10">
            <div className="relative h-[70%] flex justify-center items-center">
                <img src="/mainlogo.png" alt="Logo" className="w-14 h-14" />
                <h1 className="text-[22px] font-bold font-sans">GradeWise</h1>
            </div>
           <button className="relative w-34 h-[75%] rounded-2xl bg-purple-600/95 flex justify-center items-center cursor-pointer transition-all duration-200 hover:brightness-80">
            <h1 className="text-white text-[18px] font-[450] font-sans pointer-events-none">Get Started</h1></button>
        </div>
    </div>)
}