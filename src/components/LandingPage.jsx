import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-40 px-20">
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item,index)=>{
                return <div key={index}  className="masker ">
                            <div className="w-fit flex items-center">
                                {index===1 && (<motion.div
                                 initial={{width:0}}
                                 animate={{width:"8vw"}} 
                                 transition={{ease:[0.76,0,0.24,1],duration:1}} className=" w-[8vw] h-[5.7vw] rounded-md relative top-[0.5vw] bg-red-500"> </motion.div>)}
                                <h1  className="text-[8vw] leading-[7vw] tracking-tighter font-medium font-['Founders Grotesk X-Condensed']">
                                    {item}
                                </h1>
                            </div>
                        </div>
            })}
            
            

        </div>
        <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20 "> 
            {["For Public and Private Companies","From the first pitch to IPO"].map((item,index)=>
                <p key={index} className="text-md font-light   tracking-tight leading-none">{item}</p>
            )}
            <div className="start flex items-center gap-5 ">
                <div className="px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-sm">START THE PROJECT</div>
                <div className="w-10 h-10 flex items-center justify-center border-[1px] rounded-full border-zinc-400">
                    <span className="rotate-45">
                        <FaArrowUpLong />
                    </span>
                   
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default LandingPage
