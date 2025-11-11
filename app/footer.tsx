



export default function Header(){


    return(<div className="relative pt-2 w-full h-auto flex flex-col justify-center items-center bg-white border-t border-gray-300/60">
            <div className="relative py-2 w-full max-w-300 flex justify-between items-center sm:mx-2 md:mx-6 lg:mx-8 xl:mx-10 border-b border-gray-300/70">
                <div className="relative h-[70%] flex justify-center items-center">
                    <img src="/mainlogo.png" alt="Logo" className="w-14 h-14" />
                    <h1 className="text-[18px] sm:text-[22px] font-bold font-sans">GradeWise</h1>
                </div>
                <div className="relative pr-2 w-auto flex flex-col sm:flex-row justify-between items-end sm:items-center">
                    <a className="text-[14px] lg:text-[16px] pl-6 font-sans text-gray-600/80 hover:text-gray-800/85 cursor-pointer" href="/privacypolicy">Privacy Policy</a>
                    <a className="text-[14px] lg:text-[16px] pl-6 font-sans text-gray-600/80 hover:text-gray-800/85 cursor-pointer" href="/termsandservices">Terms of Service</a>
                    <a className="text-[14px] lg:text-[16px] pl-6 font-sans text-gray-600/80 hover:text-gray-800/85 cursor-pointer">contact@gradewise.ai</a>
                </div> 
            </div>
        <div className="relativ py-4 mb-3 w-full text-center text-gray-600/70 text-[14px] lg:text-[18px]">@ 2024 GradeWise. All rights reserved.</div>
    </div>)
}