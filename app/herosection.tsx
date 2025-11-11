

export default function HeroSection(){

    return(<div className="relative mt-18 pb-12 w-full h-auto border-b border-gray-300/30">
        <div className="herosection relative w-full h-auto flex flex-col justify-center items-center ">
            <div className="relative h-auto flex flex-col jusity-center items-center sm:w-[95%] md:w-[80%] lg:w-[70%] xl-w-[55%]" >
                <h1 className="text-5xl text-center font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">#1 GCSE</h1>
                <h1 className="text-5xl text-center font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Revision Platform</h1>
                <div className="text-center sm:w-[80%] md:w-[70%] mt-8 text-2xl text-gray-700/80 sm:text-2xl md:text-3xl">Join <p className="inline text-gray-800/80">10,000+ GCSE students</p> who are learning faster and scoring higher with diversonalised learning.</div>
                <button className="mt-12 w-90 h-14 sm:w-74 sm:h-18 md:w-80 md:h-18 bg-purple-600/95 rounded-2xl transition-all duration-300 cursor-pointer hover:scale-110 hover:brightness-90 hover:shadow-lg hover:shadow-black/30"><h1 className="text-white text-xl font-semibold pointer-events-none">Start Learning Smarter</h1></button>
            </div>
            <div className="relative w-[95%] max-w-260 p-4 mt-12 hidden md:block lg:block mask-[linear-gradient(to_bottom,white_0%_80%,transparent)] mask-cover mask-center h-auto bg-white">
                <div className="herosectionimgcont relative p-2 w-full h-full rounded-t-xl">
                    <img src="/mainimage.PNG" alt="Main Image Placeholder" className="w-full h-auto"></img>
                </div>
            </div>
        </div>
    </div>)
}