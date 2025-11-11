import Scrollar from "./scrollar";


export default function ImageScrollar(){


    return(<div className="relative mt-12 w-full h-auto ">
        <h1 className="text-center text-4xl font-bold font-sans">What Students Are Saying ❤️</h1>
        <div className="relative w-full h-fit mt-8
          mask-[linear-gradient(to_left,transparent_0%_5%,white_10%_90%,transparent_95%_100%)]     
           flex flex-col gap-6">

        <Scrollar direction={1} speed={240000} />
        <Scrollar direction={-1} speed={200000} />
        <Scrollar direction={1} speed={220000} />
        </div>
    </div>)
}