
const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tr-3xl text-black rounded-tl-3xl">
        <h1 className="font-['Neue_Montreal'] text-[4vw] tracking-tight leading-[4vw]">
            Ochi is a strategic partner for fast-growing tech businesses that need to raise
            funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.

        </h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#99AE53]">
            <div className="w-1/2   ">
                <h1 className="text-7xl">
                    Our approach:
                </h1>
                <button className="px-10 flex gap-10 items-center mt-10 py-6 bg-zinc-900 rounded-full text-white">
                    Read More
                    <div className="bg-zinc-100 rounded-full w-2 h-2">

                    </div>
                </button>

            </div>
            <div className="w-1/2 rounded-3xl h-[60vh] bg-[#55602d]">
                 
            </div>

        </div>
    </div>
  )
}

export default About
