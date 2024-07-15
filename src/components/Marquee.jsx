import { motion } from "framer-motion"


const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#144C43] ">
        <div className="text border-t-2 border-b-2 flex  border-zinc-300  overflow-hidden  whitespace-nowrap">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:5}} className="text-[16vw] leading-none font-['Founders Grotesk'] font-semibold uppercase mb-4 pt-1 pr-20 ">
                We Are Ochi
            </motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:5}} className="text-[16vw] leading-none font-['Founders Grotesk'] font-semibold uppercase mb-4 pt-1 pr-20 ">
                We Are Ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee
